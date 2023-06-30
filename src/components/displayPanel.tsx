import { Input } from '@mui/material'
import { FC } from 'react';

import { useCalculatorData } from '../contexts/calculatorDataContext';

const styles = {
  input: { 
    fontSize: '1.5vw', 
    textAlign: 'center' as const
  },
  displayPanel: {
    backgroundColor: 'white',
    border: '1px solid black',
    height: 1,
    width: 1,
    textAlign: 'center',
    input: {
      "&::placeholder": {
         opacity: 1,
      },
   },
  }
}

const DisplayPanel: FC  = () => {
  const {equation, result} = useCalculatorData();

  return (
      <Input readOnly disableUnderline autoFocus onBlur={e => e.target.focus()} placeholder={result} value={equation} 
          inputProps={{ style: styles.input }} sx={styles.displayPanel}/>
  );
};

export default DisplayPanel;