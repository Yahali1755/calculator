import { useContext, useState, FC, ReactChildren, createContext, SetStateAction, Dispatch } from 'react'

import { defaultEquationValue } from '../utils/equationUtil';

const EquationContext = createContext(defaultEquationValue);
const SetEquationContext = createContext(undefined);

export const useEquation = () => useContext<string>(EquationContext);
export const useSetEquation = () => useContext<Dispatch<SetStateAction<string>>>(SetEquationContext);

interface equationProviderProps {
    children: ReactChildren
}

export const EquationProvider: FC<equationProviderProps> = ({ children }) => {
    const [equation, setEquation] = useState<string>(defaultEquationValue);
    
    return (
        <EquationContext.Provider value={equation}>
            <SetEquationContext.Provider value={setEquation}>
                {children}
            </SetEquationContext.Provider>
        </EquationContext.Provider>
    );
};