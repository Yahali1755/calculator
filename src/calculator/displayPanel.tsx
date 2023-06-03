import { Input } from '@mui/material'
import { FC } from 'react';

import { useDisplayPanelData } from '../contexts/displayPanelDataContext';

const styles = {
  input: { 
    fontSize: '1.5vw', 
    textAlign: 'center' as const
  },
  displayPanel: {
    backgroundColor: 'white',
    border: '1px solid black',
    height: '100%',
    width: '100%',
    textAlign: 'center',
    input: {
      "&::placeholder": {
         opacity: 1,
      },
   },
  }
}

export const DisplayPanel: FC  = () => {
  const {equation, result} = useDisplayPanelData();

  return (
      <Input disableUnderline autoFocus onBlur={e => e.target.focus()} placeholder={result} value={equation} 
          inputProps={{ readOnly: true, style: styles.input }} sx={styles.displayPanel}/>
  );
};