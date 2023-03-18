import { Input } from '@mui/material'
import { FC } from 'react';

import { useEquation } from '../contexts/equationContext';

const styles = {
  inputProps: { 
    fontSize: '35px', 
    textAlign: 'center' as const
  },
  DisplayPanelProps: {
    backgroundColor: 'white',
    border: '1px solid black',
    height: '100%',
    width: '100%',
    textAlign: 'center' 
  }
}

export const DisplayPanel: FC  = () => {
  const equation = useEquation();

  return (
      <Input disableUnderline autoFocus onBlur={e => e.target.focus()} value={equation} 
          inputProps={{ readOnly: true, style: styles.inputProps}} sx={styles.DisplayPanelProps}/>
  );
};