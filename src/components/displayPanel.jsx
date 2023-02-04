import { Input } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useEquation } from '../contexts/equationContext';

const useStyles = makeStyles({
    inputProps: {
        fontSize: '25px',
        textAlign: 'center',
    },
    displayPanel: {
      border: '1px solid black',
      height: '100%',
      width: '100%',
      minHeight: '100px'
    }
});

export const DisplayPanel  = () => {
  const classes = useStyles();
  const equation = useEquation();

  return (
      <Input disableUnderline autoFocus onBlur={e => e.target.focus()} value={equation} 
          inputProps={{className: classes.inputProps, readOnly: true}} className={classes.displayPanel}/>
  )
}