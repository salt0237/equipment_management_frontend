import React, {useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabFurniture from './Components/pages/TabFurniture'
import TabLicense from './Components/pages/TabLicense'
import TabConsumable from './Components/pages/TabConsumable'
import Calender from './Components/ui/Calender'

export default function LabTabs(): JSX.Element {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="備品管理" value="1" />
            <Tab label="ソフトウェアライセンス" value="2" />
            <Tab label="消耗品" value="3" />
            <Tab label="Item four" value="4" />
          </TabList>
        </Box>

        <TabPanel value="1">
            <TabFurniture/>
        </TabPanel>

        <TabPanel value="2">
          <TabLicense/> 
        </TabPanel>

        <TabPanel value="3">
          <TabConsumable/>
        </TabPanel>

        <TabPanel value="4">
          <Calender/>
        </TabPanel>
        
      </TabContext>
    </Box>
  );
}
