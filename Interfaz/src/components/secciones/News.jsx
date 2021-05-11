import React from 'react';
// ui
import { Grid, Card, CardContent  } from '@material-ui/core'; 
// components 
import ButtonReact from '../ButtonReact';
// funciones hidomet
// funciones hidomet
import { news } from '../../surces/rss';

const  News = () => {
  return ( 
    <Grid 
    container 
    item 
    justify = 'center'
  >
    <Grid item xs = { 8 } >
      <h1>News</h1>
    </Grid>
      <ButtonReact 
        unrealFunc = { () => news }
        textButton = { 'News' }
      />
  </Grid>
  );
}
 
export default  News;