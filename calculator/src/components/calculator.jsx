import { Grid, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { NumberKey } from './keys/numberKey';
import { OperatorKey } from './keys/operatorKey';
import { DisplayPanel } from './displayPanel'

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
          <Grid item xs={6}>
            <Button className={classes.calculatorKey}> AC </Button>
          </Grid>
          <OperatorKey value={'%'}/>
          <OperatorKey value={'+'}/>
          <NumberKey value={1}/>
          <NumberKey value={2}/>
          <NumberKey value={3}/>
          <OperatorKey value={'/'}/>
          <NumberKey value={4}/>
          <NumberKey value={5}/>
          <NumberKey value={6}/>
          <OperatorKey value={'*'}/>
          <NumberKey value={7}/>
          <NumberKey value={8}/>
          <NumberKey value={9}/>
          <OperatorKey value={'-'}/>
          <Grid item xs={3}>
            <Button className={classes.calculatorKey}> . </Button>
          </Grid>
          <NumberKey value={0}/>
          <Grid item xs={6}>
            <Button className={classes.calculatorKey}> = </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}