import React, { useState } from 'react'
// material-ui
import { Box } from '@material-ui/core'
// external components
import TabButton from './TabButton'
import ResCustomProfileCard2 from './Res_CustomProfileCard2'
import ResCustomProfileCard3 from './Res_CustomProfileCard3'
//style
import { useStyles } from 'components/Dashboard/Style'
import { Res_indexStyle } from './Res_indexStyle'

function Res_index() {
  const classes = useStyles()
  const mainclasses = Res_indexStyle()
  const tabs = ['Verified', 'Verified Plus']

  const [tabKey, setTabKey] = useState(tabs[0])

  const handleClickTab = (tab: string) => {
    setTabKey(tab)
  }

  return (
    <div className={mainclasses.root}>
      <Box className={classes.container}>
        <Box className={mainclasses.containerBody}>
          <Box className={mainclasses.actionBar} justifyContent="space-between">
            <TabButton tabs={tabs} tabKey={tabKey} handleClickTab={handleClickTab} className={classes.tabMenuVisible} />
            {tabKey === 'Verified' && <ResCustomProfileCard2 />}
            {tabKey === 'Verified Plus' && <ResCustomProfileCard3 />}
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Res_index
