import React from 'react';
// styles
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ButtonReact =  ({ unrealFunc, textButton}) => {
  const classes = useStyles();
  return ( 
    <div className={classes.root}>
      <Button
        variant  = 'outlined'
        onClick  = { unrealFunc() }
        color="primary"
      >{ textButton }</Button>
    </div>
  );
}
 
export default ButtonReact;