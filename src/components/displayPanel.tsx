import { Input } from '@mui/material'
import { FC } from 'react';

import { useCalculatorData } from '../contexts/calculatorDataContext';

const styles = {
  input: { 
    textAlign: 'center' as const
  },
  displayPanel: {
    fontSize: '1.5vw', 
    backgroundColor: 'white',
    border: '1px solid black',
    height: '100%',
    width: '100%',
    input: {
      "&::placeholder": {
         opacity: 1,
      },
   },
  }
}

export const DisplayPanel: FC  = () => {
  const {equation, result} = useCalculatorData();

  return (
      <Input readOnly disableUnderline autoFocus onBlur={e => e.target.focus()} placeholder={result} value={equation} 
          inputProps={{ style: styles.input }} sx={styles.displayPanel}/>
  );
};