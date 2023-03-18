import { Grid } from '@mui/material'
import { FC } from 'react';

import { OperandKey } from './keys/operandKey';
import { OperatorKey } from './keys/operatorKey';
import { DisplayPanel } from './displayPanel'
import { ClearKey } from './keys/clearKey';
import { EqualsKey } from './keys/equalsKey';

const styles = {
  appContainer: {
    height: '100vh',
    fontFamily: 'system-ui',
    backgroundColor: '#404040'
  },  
  calculatorContainer: { 
    display: 'grid', 
    gridTemplateRows: '30%',
    margin: 'auto', 
    height: '60%', 
    minWidth: '200px',
    minHeight: '300px'
  }
};

export const Calculator: FC = () => 
  <Grid container sx={styles.appContainer}>
    <Grid container item xs={3} sx={styles.calculatorContainer}>
      <Grid item>
        <DisplayPanel/>
      </Grid>
      <Grid container item>
        <ClearKey label={'C'}/>
        <OperatorKey label={'%'}/>
        <OperatorKey label={'+'}/>
        <OperandKey label={'1'}/>
        <OperandKey label={'2'}/>
        <OperandKey label={'3'}/>
        <OperatorKey label={'/'}/>
        <OperandKey label={'4'}/>
        <OperandKey label={'5'}/>
        <OperandKey label={'6'}/>
        <OperatorKey label={'*'}/>
        <OperandKey label={'7'}/>
        <OperandKey label={'8'}/>
        <OperandKey label={'9'}/>
        <OperatorKey label={'-'}/>
        <OperandKey label={'.'}/>
        <OperandKey label={'0'}/>
        <EqualsKey label={"="}/>
      </Grid>
    </Grid>
  </Grid>