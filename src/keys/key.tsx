import { Grid, Button } from '@mui/material';
import { FC, KeyboardEvent, useEffect } from 'react';

export interface BaseKeyProps {
  label: string
}

interface KeyProps extends BaseKeyProps {
  onClick: () => void
  onKeyDown: (event: KeyboardEvent) => void,
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

export const Key: FC<KeyProps> = ({ label, onClick, onKeyDown }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === label) {
      // Trigger button click when Enter key is pressed
      const buttonElement = document.getElementById(label);

      if (buttonElement) {
        buttonElement.click();
      }
    }
  };

  return (
    <Grid xs={3}>
      <Button id={label} onClick={onClick} sx={styles.key}> 
        { label } 
      </Button>
    </Grid>
  )
}

