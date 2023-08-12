import { Typography } from '@mui/material'
import { FC } from 'react';

import { useCalculatorState } from '../contexts/calculatorStateContext';
import { formatEquation } from './formatEquation';

const styles = {
  displayPanel: {
    fontSize: '1.5vw', 
    backgroundColor: 'white',
    border: '1px solid black',
    height: '100%'
  }
};

export const DisplayPanel: FC  = () => {
  const { equation, result } = useCalculatorState();

  const formattedEquation = formatEquation(equation);

  return (
      <Typography display='flex' alignItems='center' justifyContent='center' sx={styles.displayPanel}>
           {formattedEquation ? formattedEquation : result} 
      </Typography>
  );
};