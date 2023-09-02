import { Grid, Button, IconButton, useTheme } from '@mui/material';
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
    borderRadius: 0,
    width: '100%',
    height: '100%',
    fontSize: '1.5vw',
    minWidth: 0
  }
}

export const Key: FC<KeyProps> = ({ label, onClick, icon }) => {
  const buttonRef = useRef(null);
  const theme = useTheme()

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
        <IconButton ref={buttonRef} onClick={onClick} sx={{...styles.key, 
          backgroundColor: theme.palette.text.primary, 
          color: theme.palette.background.default,
          "&:hover": { backgroundColor: theme.palette.text.secondary}}
        }>
          { icon }
        </IconButton>
        :
        <Button ref={buttonRef} onClick={onClick} sx={{...styles.key,
          backgroundColor: theme.palette.text.primary,
          color: theme.palette.background.default,
          "&:hover": { backgroundColor: theme.palette.text.secondary}}
        }> 
          { label } 
        </Button>
      }
    </Grid>
  )
}

