import { useContext, useState, FC, createContext, SetStateAction, Dispatch, ReactNode } from 'react'

import { defaultEquationValue } from '../utils/equationUtil';

const EquationContext = createContext(defaultEquationValue);
const SetEquationContext = createContext<Dispatch<SetStateAction<string>>>(undefined);

export const useEquation = () => useContext<string>(EquationContext);
export const useSetEquation = () => useContext<Dispatch<SetStateAction<string>>>(SetEquationContext);

interface EquationProviderProps {
    children: ReactNode
}

export const EquationProvider: FC<EquationProviderProps> = ({ children }) => {
    const [equation, setEquation] = useState<string>(defaultEquationValue);
    
    return (
        <EquationContext.Provider value={equation}>
            <SetEquationContext.Provider value={setEquation}>
                {children}
            </SetEquationContext.Provider>
        </EquationContext.Provider>
    );
};