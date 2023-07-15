import { FC } from 'react';
import { CssBaseline, Grid } from '@mui/material';

import { Calculator } from './calculator/calculator';

const styles = {
    appContainer: {
        backgroundColor: '#404040',
        height: '100vh'
    },  
}

const App: FC = () =>
    <CssBaseline>
        <Grid container sx={styles.appContainer}>
            <Calculator/>
        </Grid>
    </CssBaseline>

export default App;