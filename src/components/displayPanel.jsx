import { Grid, Input } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useEquation } from '../contexts/equationContext';

const useStyles = makeStyles({
    inputProps: {
        fontSize: '25px',
        textAlign: 'center',
    },
    displayPanel: {
      '& :disabled': {
        WebkitTextFillColor: 'black'
      },
      border: '1px solid black',
      height: '100%',
    }
});

export const DisplayPanel  = () => {
  const classes = useStyles();
  const equation = useEquation();

  return (
    <Grid item>
        <Input disabled value={equation} inputProps={{className: classes.inputProps}} className={classes.displayPanel}/>
    </Grid>
  )
}