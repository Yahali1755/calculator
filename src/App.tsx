import { FC } from 'react';
import { CssBaseline, Grid } from '@mui/material';

import { Calculator } from './calculator/calculator';
import { ThemeProvider } from './theme/themeProvider';
import DarkModeToggle from './theme/toggleTheme';

const styles = {
    appContainer: {
        height: '100vh'
    },  
}

const App: FC = () =>
    <>
        <ThemeProvider>
            <CssBaseline/>
            <Grid container sx={styles.appContainer}>
                <Calculator/>
                <DarkModeToggle/>
            </Grid>
        </ThemeProvider>
    </>


export default App;