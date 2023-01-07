import React from 'react'
import { Grid, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  calculatorKey: { 
    '&:hover': {
      backgroundColor: '#E0E0E0',
    },
    color: 'black',
    borderRadius: 0,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '100%',
    fontSize: '30px',
  }
});

export const CalculatorKey  = ({value}) => {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
        <Button className={classes.calculatorKey}> {value} </Button>
    </Grid>
  )
}