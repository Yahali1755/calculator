import { Grid, Button, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  app: {
    fontFamily: 'system-ui',
    width: '100%',
    height: '100%'
  },
  calculatorKey: { 
    '&:hover': {
      backgroundColor: 'white',
    },
    color: 'black',
    fontFamily: 'inherit',
    borderColor: 'black', 
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '100%',
    marginTop: '30%'
  },
  container: { 
    fontFamily: 'inherit',
    height: '50vh', 
    width: '15vw', 
    borderRadius: '10%', 
    backgroundColor: 'grey',
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
        <Box sx={{ flexGrow: '1', display: 'grid', justifyContent: 'center', alignContent: 'center'}}>
          <Grid container className={classes.container} spacing={1}>
            <Grid item xs={3}>
              <Button className={classes.calculatorKey}> 1 </Button>
            </Grid>
            <Grid item xs={3}>
              <Button className={classes.calculatorKey}> 1 </Button>
            </Grid>
            <Grid item xs={3}>
              <Button className={classes.calculatorKey}> 1 </Button>
            </Grid>
            <Grid item xs={3}>
              <Button className={classes.calculatorKey}> 1 </Button>
            </Grid>
            <Grid item xs={3}>
              <Button className={classes.calculatorKey}> 1 </Button>
            </Grid>
            <Grid item xs={3}>
              <Button className={classes.calculatorKey}> 1 </Button>
            </Grid>
            <Grid item xs={3}>
              <Button className={classes.calculatorKey}> 1 </Button>
            </Grid>
            <Grid item xs={3}>
              <Button className={classes.calculatorKey}> 1 </Button>
            </Grid>
            <Grid item xs={3}>
              <Button className={classes.calculatorKey}> 1 </Button>
            </Grid>
            <Grid item xs={3}>
              <Button className={classes.calculatorKey}> 1 </Button>
            </Grid>
          </Grid>
        </Box>
    </div>
  );
}

export default App;