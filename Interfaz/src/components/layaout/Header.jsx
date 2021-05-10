import React from 'react';
// styles
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { AccessAlarm, ThreeDRotation, CloudCircleOutlined, BookOutlined } from '@material-ui/icons';

const Header = ({ setSeccion }) => {
  const enviasSeccion= seccion => {
    setSeccion( seccion );
  } 
  return (
    <BottomNavigation
    >
      <BottomNavigationAction 
        label="Recents" 
        icon={<BookOutlined />} 
        onClick = {() => enviasSeccion('tests') }
      />
      <BottomNavigationAction 
        label="Favorites" 
        icon={<CloudCircleOutlined />} 
        onClick = {() => enviasSeccion('pronostico') }
      />
      <BottomNavigationAction 
        label="Nearby" 
        icon={<AccessAlarm />} 
        onClick = {() => enviasSeccion('embalses') }
      />
      <BottomNavigationAction 
        label="Nearby" 
        icon={<AccessAlarm />} 
        onClick = {() => enviasSeccion('mareas') }
      />
      <BottomNavigationAction 
        label="Nearby" 
        icon={<AccessAlarm />} 
        onClick = {() => enviasSeccion('condiciones') }
      />
    </BottomNavigation>
  );
}
 
export default Header;