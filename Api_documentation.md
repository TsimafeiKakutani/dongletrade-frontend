<h1 align="center" style="color:green">
    <b>TRADING VIEW CHART JS API DOCUMENTATION</b>
</h1>

<p align="center">
    <i>By GoldenStar</i>
</p>
<br />
<br />

# 1. onReady(callback)

`callback`: function(configurationData)
`configurationData: object`

### exchanges (An array of exchange descriptors)

`{value: String, name:String, desc:String}`

### symbols_types (An array of filter descriptors.)

`{value: string, name: string}`

### supported_resolutions (An array of supported resolutions. )

`supported_resolutions = undefined` or
`supported_resolutions = []` returns default resolution content.

ex: `["1", "15", "240", "D", "6M"]` gives "1 minute, 15 minutes, 4 hours, 1 day, 6 months" in resolution widget.

### currency_codes (An array of supported currencies for currency conversion.)

ex: `["USD", "EUR", "GBP"]`.

### units (An object that lists supported unit groups)

- `id: string. Unique id`
- `name: string. Short name`
- `description : string. Description`

### supports_marks

Boolean showing whether your datafeed supports marks on bars or not.

### supports_timescale_marks

Boolean showing whether your datafeed supports timescale marks or not.

### supports_time

Set this one to `true` if your datafeed provides server time (unix time). It is used to adjust Countdown on the Price scale.

### symbols_grouping

Set it if you want to group symbols in the symbol search. Represents an object where keys are symbol types and values ​​are regular expressions (each regular expression should divide an instrument name into 2 parts: a root and an expiration).

ex:

```javascript
    {
      "futures": `/^(.+)([12]!|[FGHJKMNQUVXZ]\d{1,2})$/`,
      "stock": `/^(.+)([12]!|[FGHJKMNQUVXZ]\d{1,2})$/`,
    }
```

It is applied to the instruments with `futures` and `stock` as a `type`.

# 2. searchSymbols(userInput, exchange, symbolType, onResultReadyCallback)

1. `userInput`: string. It is text entered by user in the symbol search field.
1. `exchange`: string. The requested exchange (chosen by user). Empty value means no filter was specified.
1. `symbolType`: string. The requested symbol type: `index`, `stock`, `forex`, etc (chosen by user).
   Empty value means no filter was specified.
1. `onResultReadyCallback`: function(result)
   1. `result`: array (see below)

```javascript
[
  {
    symbol: "<short symbol name>",
    full_name: "<full symbol name>", // e.g. BTCE:BTCUSD
    description: "<symbol description>",
    exchange: "<symbol exchange name>",
    ticker: "<symbol ticker name, optional>",
    type: "stock", // or "futures" or "bitcoin" or "forex" or "index"
  },
];
```

# 3. resolveSymbol(symbolName, onSymbolResolvedCallback, onResolveErrorCallback, extension)

1. `symbolName`: string. Symbol name or `ticker` if provided.
1. `onSymbolResolvedCallback`: function(SymbolInfo)
1. `onResolveErrorCallback`: function(reason)
1. `extension`: optional object with additional parameters. It has the following fields:
   1. `currencyCode`: string. It may be provided to indicate the currency for conversion if `currency_codes` configuration
      field is set and `currency_code` is provided in the original symbol information. Read more about `currency conversion`.
   1. `unitId`: string. It may be provided to indicate the unit for conversion if `units` configuration
      field is set and `unit_id` is provided in the original symbol information.

# 4. **getBars(symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) !!!!Important//Neccessary**

1. `symbolInfo`: object
1. `resolution`: string
1. `periodParams`: object with the following fields:
   1. `from` - unix timestamp, leftmost required bar time (inclusive end)
   1. `countBack` - the exact amount of bars to load, should be considered a higher priority than `from` if your datafeed supports it (see below). It may not be specified if the user requests a specific time period.
   1. `to`: unix timestamp, rightmost required bar time (not inclusive)
   1. `firstDataRequest`: boolean to identify the first call of this method.
      When it is set to `true` you can ignore `to` (which depends on browser's `Date.now()`) and return bars up to the latest bar.
1. `onHistoryCallback`: callback function for historical data. It should be called **just once**. This function has 2 arguments:
   1. Array of `bars`. See below.
   1. `Meta information`: See below.
1. `onErrorCallback`: callback function for errors. The only argument of this function is a text error message.

This function is called when the chart needs a history fragment defined by dates range.

`Bar` is an object with the following fields:

1. `time`: number. Amount of **milliseconds** since Unix epoch start in **UTC** timezone.
1. `open`: number. Bar's open value
1. `high`: number. Bar's high value
1. `low`: number. Bar's low value
1. `close`: number. Bar's close value
1. `volume`: number. Bar's volume value

`Meta information` is an object with the following fields:

1. `noData`: boolean. This flag should be set if there is no data in the requested period.
1. `nextTime`: unix timestamp (UTC). Time of the next bar in the history. It should be set if the requested period represents a gap in the data. Hence there is available data prior to the requested period.

### Note about `periodParams`

`from` parameter was and remains inaccurate, since it does not fully take into account the trading session of the symbol. The reason for an inaccurate calculation is speed (an accurate calculation has a linear time complexity, and an inaccurate calculation has a constant complexity).

`countBack` the minimum number of bars that the chart needs (it can be slightly larger) to fill the visible range (except for Japanese charts), and along with the `to` date (which is the date of the last loaded bar), you can easily provide required data in just one request.

It is recommended to consider the priority of `countBack` higher than the priority of `from`, i.e. you must return data in the range `[from, to)`, but the number of bars should not be less than `countBack`. If the number of bars is less than `countBack`, the chart will call `getBars` again.

If your data provider can return the exact amount of bars, it is preferable to use `countBack` over the `from` date for greater efficiency:

# 5. subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback)

1. `symbolInfo`: object
1. `resolution`: string
1. `onRealtimeCallback`: function(bar)
   1. `bar`: object `{time, close, open, high, low, volume}`
1. `subscriberUID`: object
1. `onResetCacheNeededCallback` _(since version 1.7)_: function() to be executed when bar data has changed

# 6. unsubscribeBars(subscriberUID)

1. `subscriberUID`: object

# 7. Other

### getMarks(symbolInfo, from, to, onDataCallback, resolution) _Unneccessary_

_Optional._

1. `symbolInfo`: object
1. `from`: unix timestamp (UTC). Leftmost visible bar's time.
1. `to`: unix timestamp (UTC). Rightmost visible bar's time.
1. `onDataCallback`: function(array of `mark`s)
1. `resolution`: string

`mark` is an object that has the following properties:

- `id`: unique mark ID
- `time`: unix time, UTC
- `color`: `red` | `green` | `blue` | `yellow` | `{ border: '#ff0000', background: '#00ff00' }`
- `text`: mark popup text
- `label`: a letter to be printed on a mark
- `labelFontColor`: color of a letter on a mark
- `minSize`: minimum mark size (diameter, pixels) (default value is `5`)

### getTimescaleMarks(symbolInfo, from, to, onDataCallback, resolution) _Unneccessary_

_Optional._

1. `symbolInfo`: object
1. `from`: unix timestamp (UTC). Leftmost visible bar's time.
1. `to`: unix timestamp (UTC). Rightmost visible bar's time.
1. `onDataCallback`: function(array of `mark`s)
1. `resolution`: string

`mark` is an object that has the following properties:

- `id`: unique mark ID.
- `time`: unix time, UTC
- `color`: `red` | `green` | `blue` | `yellow` | ... | `#000000`
- `label`: a letter to be printed on a mark. Single character
- `tooltip`: array of text strings. Each element of the array is a new text line of a tooltip.

### getServerTime(callback) _Unneccessary_

1. `callback`: function(unixTime)

### getVolumeProfileResolutionForPeriod(currentResolution, from, to, symbolInfo) _Unneccessary_

_Optional._

1. `currentResolution`: string. Currently selected resolution on the chart
1. `from`: unix timestamp (UTC). Time of the leftmost visible bar
1. `to`: unix timestamp (UTC). Time of the rightmost visible bar
1. `symbolInfo`: object
