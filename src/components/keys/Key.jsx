import { Grid, Button } from '@mui/material';

export const Key  = ({ label, xs, onClick }) => {
  return (
    <Grid item xs={xs ? xs : 3}>
      <Button onClick={onClick} 
        sx={{ 
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
        }}
      > 
      {label} 
      </Button>
    </Grid>
  );
}