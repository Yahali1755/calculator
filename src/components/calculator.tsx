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

const operators = ['%', '+', '/', '*', '-'];
const operands = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export const Calculator: FC = () => 
  <Grid container sx={styles.appContainer}>
    <Grid container item xs={3} sx={styles.calculatorContainer}>
      <Grid item>
        <DisplayPanel/>
      </Grid>
      <Grid container item>
        <ClearKey label={'C'}/>
        { operands.map(operand => <OperandKey label={operand}/>) }
        { operators.map(operator => <OperatorKey label={operator}/>) }
        <EqualsKey label={"="}/>
      </Grid>
    </Grid>
  </Grid>