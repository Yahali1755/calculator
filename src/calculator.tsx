import { Grid } from '@mui/material'
import { FC } from 'react';

import { DisplayPanel } from './displayPanel/displayPanel'
import { ClearKey } from './keys/clearKey';
import { EqualsKey } from './keys/equalsKey';
import { Operator } from './constants/operator'
import { OperandKey } from './keys/operandKey';
import { OperatorKey } from './keys/operatorKey';
import { CalculatorDataProvider } from './contexts/calculatorDataContext';

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

const keys = ['(', ')', '%', 'C', '7','8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

export const Calculator: FC = () =>
  <CalculatorDataProvider>
    <Grid container sx={styles.appContainer}>
      <Grid container item xs={3} sx={styles.calculatorContainer}>
        <Grid item>
          <DisplayPanel/>
        </Grid>
        <Grid container item>
          {
            keys.map(key => {
              if (key === 'C') {
                return <ClearKey/>
              }

              if (key === '=') {
                return <EqualsKey/>
              }

              if (Object.values(Operator).some(operator => operator === key)) {
                return <OperatorKey label={key}/>
              }

              return <OperandKey label={key}/>
            })
          }
        </Grid>
      </Grid>
    </Grid>
  </CalculatorDataProvider>