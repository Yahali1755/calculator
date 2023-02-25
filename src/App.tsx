import { FC } from 'react';
import { Calculator } from './components/calculator';
import { EquationProvider } from './contexts/equationContext';
import { ShouldResetEquationProvider } from './contexts/shouldResetEquationContext';
import './index.css'

const App: FC = () => {
  return (
    <EquationProvider>
      <ShouldResetEquationProvider>
        <Calculator/>
      </ShouldResetEquationProvider>
    </EquationProvider>
  );
};

export default App;