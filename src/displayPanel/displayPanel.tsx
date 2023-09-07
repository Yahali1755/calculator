import { Typography, useTheme } from '@mui/material'
import { FC } from 'react';

import { useCalculatorState } from '../contexts/calculatorStateContext';
import { formatEquation } from './formatEquation';

const styles = {
  displayPanel: {
    fontSize: '1.5vw', 
    height: '100%',
  }
};

export const DisplayPanel: FC  = () => {
  const { equation, result } = useCalculatorState();
  const theme = useTheme();

  const formattedEquation = formatEquation(equation);

  return (
      <Typography display='flex' alignItems='center' justifyContent='center' 
        sx={{...styles.displayPanel, backgroundColor: theme.palette.text.primary, 
        color: theme.palette.background.default, 
        border: '1px solid',
        borderColor: theme.palette.background.default
      }}>
           {formattedEquation ? formattedEquation : result} 
      </Typography>
  );
};