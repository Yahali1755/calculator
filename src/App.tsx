import { FC, ReactNode } from 'react';

import { Calculator } from './calculator';
import { CalculatorDataProvider  } from './contexts/calculatorDataContext';
import './index.css'

interface AppProps {
  children: ReactNode
}

const App: FC<AppProps> = () => 
    <CalculatorDataProvider>
        <Calculator/>
    </CalculatorDataProvider>

export default App;