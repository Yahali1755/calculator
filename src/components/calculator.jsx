import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { NumberKey } from './keys/numberKey';
import { OperatorKey } from './keys/operatorKey';
import { DisplayPanel } from './displayPanel'
import { ClearKey } from './keys/clearKey';
import { EqualsKey } from './keys/equalsKey';
import { DotKey } from './keys/dotKey';

const useStyles = makeStyles({
  appContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'system-ui'
  },
  calculatorContainer: {
    display: 'grid',
    gridTemplateRows: '30%',
    height: '50%',
    minWidth: '200px',
    minHeight: '300px'
  }
});

export const Calculator = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.appContainer}>
      <Grid container item className={classes.calculatorContainer} xs={2}>
        <Grid sx={{}} item>
          <DisplayPanel/>
        </Grid>
        <Grid container item>
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
          <DotKey label={'.'}/>
          <NumberKey label={'0'}/>
          <EqualsKey label={"="}/>
        </Grid>
      </Grid>
    </Grid>
  );
}