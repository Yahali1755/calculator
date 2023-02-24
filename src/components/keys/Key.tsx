import { Grid, Button } from '@mui/material';
import { FC } from 'react';

export interface keyProps {
  label: string,
  xs?: number,
  onClick?: () => string
}

const styles = {
  button: {
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
}

export const Key: FC<keyProps> = ({ label, xs, onClick }) => {
  return (
    <Grid item xs={xs ? xs : 3}>
      <Button onClick={onClick} sx={styles.button}> { label } </Button>
    </Grid>
  );
}