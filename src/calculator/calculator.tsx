import { Grid } from '@mui/material'
import { FC } from 'react';

import { DisplayPanel } from '../displayPanel/displayPanel'
import { CalculatorStateProvider } from '../contexts/calculatorStateContext';
import { Keys } from './keys';

const styles = {
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
  <CalculatorStateProvider>
    <Grid container item xs={3} sx={styles.calculatorContainer}>
      <Grid item>
        <DisplayPanel/>
      </Grid>
      <Grid container item>
        <Keys/>
      </Grid>
    </Grid>
  </CalculatorStateProvider>