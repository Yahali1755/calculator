import { Grid, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { NumberKey } from './keys/numberKey';
import { OperatorKey } from './keys/operatorKey';
import { DisplayPanel } from './displayPanel'
import { ClearKey } from './keys/clearKey';
import { EqualsKey } from './keys/equalsKey';

const useStyles = makeStyles({
  calculator: {
    fontFamily: 'system-ui',
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    height: '95vh',
  },
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

  },
  calculatorContainer: { 
    flexGrow: 1,
    height: '50vh', 
    width: '15vw', 
    borderRadius: '5%', 
  },
  keysContainer: {
    height: '70%',
  },
  displayPanelContainer: {
    height: '30%',
  }
});

export const Calculator = () => {
  const classes = useStyles();

  return (
    <div className={classes.calculator}>
      <Grid container className={classes.calculatorContainer}>
        <Grid container className={classes.displayPanelContainer}>
          <DisplayPanel/>
        </Grid>
        <Grid container className={classes.keysContainer}>
          <ClearKey label={'AC'}/>
          <OperatorKey label={'%'}/>
          <OperatorKey label={'+'}/>
          <NumberKey label={'1'}/>
          <NumberKey label={'2'}/>
          <NumberKey label={'3'}/>
          <OperatorKey label={'/'}/>
          <NumberKey label={'4'}/>
          <NumberKey label={'5'}/>
          <NumberKey label={'6'}/>
          <OperatorKey label={'*'}/>
          <NumberKey label={'7'}/>
          <NumberKey label={'8'}/>
          <NumberKey label={'9'}/>
          <OperatorKey label={'-'}/>
          <Grid item xs={3}>
            <Button className={classes.calculatorKey}> . </Button>
          </Grid>
          <NumberKey label={'0'}/>
          <EqualsKey label={"="}/>
        </Grid>
      </Grid>
    </div>
  );
}