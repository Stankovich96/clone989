import React from 'react';
import Switch from "../switch/Switch";
import { ThemeProvider } from 'styled-components'
import { FaTimes} from 'react-icons/fa';
import { FaCheck} from 'react-icons/fa';

const theme = {
    switch: {
      background: '#989595',
      backgroundAccent: '#4A3A2F',
      height: '24px',
      width: '50px',
      indicatorBackground: '#ffffff',
      indicatorSize: '18px',
      indicatorMargin: '0 -4px',
      svgSize: '15px'
    }
  }

const MapSwitchButton = (props) => (
    <ThemeProvider theme={theme}>
         <Switch
            label='Map'
            activeStateIcon={<FaCheck />}
            inactiveStateIcon={<FaTimes />}
            {...props}
        />
    </ThemeProvider>
   
);

export default MapSwitchButton;