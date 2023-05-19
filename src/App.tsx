import { FC, ReactNode } from 'react';

import { Calculator } from './components/calculator';
import { EquationProvider } from './contexts/displayPanelDataContext';
import { ShouldResetEquationProvider } from './contexts/placeholderContext';
import './index.css'

interface AppProps {
  children: ReactNode
}

const App: FC<AppProps> = () => 
    <EquationProvider>
      <ShouldResetEquationProvider>
        <Calculator/>
      </ShouldResetEquationProvider>
    </EquationProvider>

export default App;