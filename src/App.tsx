import { FC } from 'react';

import { Calculator } from './components/calculator';
import { CalculatorDataProvider  } from './contexts/calculatorDataContext';
import './index.css'

const App: FC = () => 
    <CalculatorDataProvider>
        <Calculator/>
    </CalculatorDataProvider>

export default App;