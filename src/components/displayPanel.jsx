import { Input } from '@mui/material'

import { useEquation } from '../contexts/equationContext';

export const DisplayPanel  = () => {
  const equation = useEquation();

  return (
      <Input disableUnderline autoFocus onBlur={e => e.target.focus()} value={equation} 
          inputProps={{ readOnly: true, style: { fontSize: '25px', textAlign: 'center' }}} 
          sx={{
            backgroundColor: 'white',
            border: '1px solid black',
            height: '100%',
            width: '100%'
          }}
      />
  )
}