import { Typography } from '@mui/material'
import { FC } from 'react';

import { useCalculatorData } from '../contexts/calculatorDataContext';

const styles = {
  displayPanel: {
    fontSize: '1.5vw', 
    backgroundColor: 'white',
    border: '1px solid black',
    height: '100%',
  }
};

export const DisplayPanel: FC  = () => {
  const {equation, result} = useCalculatorData();

  return (
      <Typography display='flex' alignItems='center' justifyContent='center' sx={styles.displayPanel}>
           {equation ? equation : result} 
      </Typography>
  );
};