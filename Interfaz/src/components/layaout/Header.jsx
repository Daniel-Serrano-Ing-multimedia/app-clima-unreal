import React from 'react';
// styles
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { AccessAlarm, ThreeDRotation, CloudCircleOutlined, BookOutlined, FiberNewOutlined,FiberNew} from '@material-ui/icons';
// funciones hidomet
import { obtenerEmbalses } from '../../surces/hidromet';
import { news, xmlSource } from '../../surces/rss';

const Header = ({ setSeccion, setData }) => {
  
  async function embalsesFunc() {
    setData( await obtenerEmbalses()  );
    enviasSeccion( 'embalses' )
  }

  async function xmlFunc() {
    setData( await xmlSource()  );
    console.log(' desde xml ')
    enviasSeccion( 'xml' )
  }

  async function newsFunc() {
    setData( await news()  );
    console.log(' enviando news ')
    enviasSeccion( 'news' )
  }
  
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
        onClick = {() => embalsesFunc ()}
      />
      <BottomNavigationAction 
        label="Nearby" 
        icon={<AccessAlarm />} 
        onClick = {() => enviasSeccion('mareas') }
      />
      <BottomNavigationAction 
        label="Nearby" 
        icon={<FiberNewOutlined />} 
        onClick = {() => xmlFunc()}
      />
      <BottomNavigationAction 
        label="Nearby" 
        icon={<FiberNew />} 
        onClick = {() => newsFunc()}
      />
    </BottomNavigation>
  );
}
 
export default Header;