import React, { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
// material-ui
import { Typography, Popper, Grow, Paper, MenuList, ClickAwayListener, Button, Box } from '@material-ui/core'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded'
// style
import { useStyles } from './Style'

interface SearchableSelectFormProps {
  className?: string
  options: string[]
  type: string
  selectedItem: string
  handleItem: (pair: string) => void
}

function SearchableSelectForm({ className, options, type, selectedItem, handleItem }: SearchableSelectFormProps) {
  const classes = useStyles()
  const [selectOpen, setSelectOpen] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)
  const [optionLists, setOptionLists] = useState<any[]>([])
  const [searchKey, setSearchKey] = useState('')

  const handleClickTab = (tab: string) => {
    handleItem(tab)
  }

  const handleTabSelectOpen = () => {
    setSelectOpen((selectPrevOpen) => !selectPrevOpen)
  }

  const handleTabSelectClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setSelectOpen(false)
  }

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setSelectOpen(false)
    }
  }

  const handleSearchKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value)
    if (event.target.value === '') {
      setOptionLists(options)
    } else {
      setOptionLists(options.filter((option) => option.toLowerCase().includes(event.target.value.toLowerCase())))
    }
  }

  // return focus to the button when we transitioned from !selectOpen -> selectOpen
  const selectPrevOpen = React.useRef(selectOpen)
  useEffect(() => {
    if (selectPrevOpen.current === true && selectOpen === false) {
      anchorRef.current!.focus()
    }
    selectPrevOpen.current = selectOpen
  }, [selectOpen])

  useEffect(() => {
    setOptionLists(options)
  }, [options])
  return (
    <>
      <Button
        className={clsx(classes.tabSelect, className)}
        style={{ minWidth: '136px' }}
        ref={anchorRef}
        aria-controls={selectOpen ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleTabSelectOpen}
      >
        <span className={classes.placeholder}>
          <Typography className={classes.selectedListItem} style={{ color: '#707a8a', marginRight: '30px' }}>
            {type}
          </Typography>
          <Typography className={classes.selectedListItem}>{selectedItem}</Typography>
        </span>
        {selectOpen ? (
          <ArrowDropUpRoundedIcon className={classes.arrowIcon} />
        ) : (
          <ArrowDropDownRoundedIcon className={classes.arrowIcon} />
        )}
      </Button>

      <Popper
        open={selectOpen}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: 100 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper className={classes.listContainer}>
              <ClickAwayListener onClickAway={handleTabSelectClose}>
                <div>
                  <Box className={classes.searchInputBox}>
                    <div className={classes.searchContent}>
                      <i className={'icon-search'} />
                      <input className={classes.searchInput} value={searchKey} onChange={handleSearchKeyChange} />
                      <i className={'far fa-close'}></i>
                    </div>
                  </Box>
                  <MenuList
                    autoFocusItem={selectOpen}
                    className={classes.menuList}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <Typography
                      className={clsx(classes.listItem, { [classes.activeColor]: selectedItem === 'All' })}
                      onClick={(e) => {
                        handleClickTab('All')
                        handleTabSelectClose(e)
                      }}
                    >
                      All
                      {'All' === selectedItem && <i className={clsx('icon-check', classes.checkIcon)} />}
                    </Typography>
                    {optionLists?.map((option) => (
                      <Typography
                        key={option}
                        className={clsx(classes.listItem, { [classes.activeColor]: option === selectedItem })}
                        onClick={(e) => {
                          handleClickTab(option)
                          handleTabSelectClose(e)
                        }}
                      >
                        {option}
                        {option === selectedItem && <i className={clsx('icon-check', classes.checkIcon)} />}
                      </Typography>
                    ))}
                  </MenuList>
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default SearchableSelectForm
