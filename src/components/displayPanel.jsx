import { Grid, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useResult } from '../contexts/resultContext';

const useStyles = makeStyles({
    inputProps: {
        height: '145px',
        fontSize: '30px',
        textAlign: 'center'
    },
    displayPanel: {
      '& :disabled': {
        WebkitTextFillColor: 'black'
      },
      boxSizing: 'border-box',
      border: '1px solid black'
    }
});

export const DisplayPanel  = () => {
  const classes = useStyles();
  const result = useResult();

  return (
    <Grid item>
        <TextField disabled value={result} inputProps={{className: classes.inputProps}} 
          fullWidth className={classes.displayPanel}/>
    </Grid>
  )
}