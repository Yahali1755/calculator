import { Button, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  app: {
  },
  button: { 
    '&:hover': {
      color: 'white',
      borderColor: 'white'
    },
    color: 'black',
    borderColor: 'black', 
    borderRadius: '25%'

  },
  container: { 
    marginTop: '25vh',
    height: '50vh', 
    width: '30vh', 
    margin: 'auto',
    borderRadius: '10%', 
    backgroundColor: 'grey',
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
        <Grid container className={classes.container}>
          <Grid item xs={3}>
            <Button variant='outlined' className={classes.button}> click on me </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='outlined' className={classes.button}> click on me </Button>
          </Grid>
          <Grid item xs={3} >
            <Button variant='outlined' className={classes.button}> click on me </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='outlined' className={classes.button}> click on me </Button>
          </Grid>
        </Grid>
    </div>
  );
}

export default App;