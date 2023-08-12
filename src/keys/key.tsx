import { Grid, Button, IconButton } from '@mui/material';
import { FC, ReactNode, useEffect, useRef } from 'react';

export interface BaseKeyProps {
  label?: string
}

interface KeyProps extends BaseKeyProps {
  onClick: () => void,
  icon?: ReactNode;
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

export const Key: FC<KeyProps> = ({ label, onClick, icon }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === label) {
      buttonRef.current.click();
    }
  };

  return (
    <Grid xs={3}>
      {
        icon ?
        <IconButton ref={buttonRef} onClick={onClick} sx={styles.key}>
          { icon }
        </IconButton>
        :
        <Button ref={buttonRef} onClick={onClick} sx={styles.key}> 
          { label } 
        </Button>
      }
    </Grid>
  )
}

