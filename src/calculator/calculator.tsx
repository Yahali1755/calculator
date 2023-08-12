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
  },
  displayPanelContainer: {
    overflow: 'auto',
    backgroundColor: 'white'
  }
};

export const Calculator: FC = () =>
  <CalculatorStateProvider>
    <Grid container xs={3} sx={styles.calculatorContainer}>
      <Grid sx={styles.displayPanelContainer}>
        <DisplayPanel/>
      </Grid>
      <Grid container>
        <Keys/>
      </Grid>
    </Grid>
  </CalculatorStateProvider>