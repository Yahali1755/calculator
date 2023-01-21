import { StyledEngineProvider } from '@mui/material';
import { Calculator } from './components/calculator';
import { EquationProvider } from './contexts/equationContext';
import { ShouldResetEquationProvider } from './contexts/shouldResetEquationContext';

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <EquationProvider>
        <ShouldResetEquationProvider>
          <Calculator/>
        </ShouldResetEquationProvider>
      </EquationProvider>
    </StyledEngineProvider>
  );
}

export default App;