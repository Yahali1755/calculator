import { StyledEngineProvider } from '@mui/material';
import { Calculator } from './components/calculator';
import { ResultProvider } from './contexts/resultContext';

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ResultProvider>
          <Calculator/>
      </ResultProvider>
    </StyledEngineProvider>
  );
}

export default App;