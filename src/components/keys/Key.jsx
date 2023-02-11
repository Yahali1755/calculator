import { Grid, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  calculatorKey: { 
    '&:hover': {
      backgroundColor: '#E0E0E0',
    },
    color: 'black',
    borderRadius: 0,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '100%',
    fontSize: '25px',
    minWidth: 0
  }
});

export const Key  = ({ label, xs, onClick }) => {
  const classes = useStyles();

  return (
    <Grid item xs={xs ? xs : 3}>
        <Button onClick={onClick} className={classes.calculatorKey}> {label} </Button>
    </Grid>
  );
}