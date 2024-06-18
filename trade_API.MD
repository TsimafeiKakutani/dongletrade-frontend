<h1 align="center" style="color:green">
    <b>TRADING VIEW CHART JS API</b>
</h1>

# getAllSymbols

URL: http://localhost:9090/api/v1/trade/allexchanges

Method: POST

## Response

```javascript
{
    "Response" : true/false,
    "HasWarning" : true/false,
    "Message" : "",
    "RateLimit": {},
    "Type": 100,
    "Data": {
        "Zilionixx": {
            "IsActive" : true/false,
            "IsToptier" : true/false
            "pairs" : {
                "ZNX": ["ZNX","USD"],
                "USD": ["USDT","USD"]
                ...
            }
        },
        "NexRev": {},
        ...
    },
}
```

# getBars

URL: http://localhost:9090/api/v1/trade/getBars

Method: Post

| Field    | Type   | Required | Description            |
| -------- | ------ | -------- | ---------------------- |
| exchange | String | true     | symbol exchange name   |
| fsym     | String | true     | from symbol            |
| tsym     | String | true     | to symbol              |
| toTs     | Number | true     | to Timestamp           |
| limit    | Number | true     | limit number of return |

query ex: exchange=Zilionixx&fsym=BTC&tsym=USD&toTs=1637193600&limit=2000

## Response

```javascript
{
    "Aggregated" : true/false,
    "ConversionType" : {
        "conversionSymbol" : "",
        "type" : "force_direct"
    }
    "Response" : true/false,
    "RateLimit": {},
    "TimeFrom" : 1464307200,
    "TimeTo" : 1637107200,
    "FirstValueInArray": true,
    "Type": 100,
    "Data": [
        {
            "close": 540.4,
            "conversionSymbol" : "",
            "type" : "force_direct",
            'high': 546.12
            'low': 523.75
            'open': 531.04
            'time': 1464739200
            'volumefrom': 27090.06
            'volumeto': 14548295.83
        },
        {
            "close": 539,
            "conversionSymbol" : "",
            "type" : "force_direct",
            'high': 544
            'low': 532.37
            'open': 536.02
            'time': 1464825600
            'volumefrom': 16553.49
            'volumeto': 8882891.29
        },
        ...
    ]
}
```
