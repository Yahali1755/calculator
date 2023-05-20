import { FC, ReactNode } from 'react';

import { Calculator } from './components/calculator';
import { DisplayPanelDataProvider  } from './contexts/displayPanelDataContext';
import './index.css'

interface AppProps {
  children: ReactNode
}

const App: FC<AppProps> = () => 
    <DisplayPanelDataProvider>
        <Calculator/>
    </DisplayPanelDataProvider>

export default App;