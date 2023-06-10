import { Grid } from '@mui/material'
import { FC } from 'react';

import { OperandKey } from './keys/operandKey';
import { OperatorKey } from './keys/operatorKey';
import { DisplayPanel } from './displayPanel'
import { ClearKey } from './keys/clearKey';
import { EqualsKey } from './keys/equalsKey';
import { Operand } from '../constants/operand';
import { Operator } from '../constants/operator'

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
        { Object.values(Operand).map(operand => <OperandKey label={operand}/>) }
        { Object.values(Operator).map(operator => <OperatorKey label={operator}/>) }
        <EqualsKey label={"="}/>
      </Grid>
    </Grid>
  </Grid>