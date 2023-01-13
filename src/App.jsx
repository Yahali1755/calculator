import { StyledEngineProvider } from '@mui/material';
import { Calculator } from './components/calculator';
import { EquationProvider } from './contexts/equationContext';

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <EquationProvider>
          <Calculator/>
      </EquationProvider>
    </StyledEngineProvider>
  );
}

export default App;