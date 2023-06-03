import { Grid, Button } from '@mui/material';
import { FC } from 'react';

export interface BaseKeyProps {
  label: string
}

interface KeyProps extends BaseKeyProps {
  label: string,
  xs?: number,
  onClick: () => void
};

const styles = {
  key: {
    '&:hover': {
      backgroundColor: '#E0E0E0'
    },
    color: 'black',
    borderRadius: 0,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '100%',
    fontSize: '1.5vw',
    minWidth: 0
  }
}

export const Key: FC<KeyProps> = ({ label, xs, onClick }) => 
  <Grid item xs={xs ?? 4}>
    <Button onClick={onClick} sx={styles.key}> { label } </Button>
  </Grid>