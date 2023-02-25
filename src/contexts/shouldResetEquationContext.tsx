import { useContext, useState, FC, createContext, SetStateAction, Dispatch, ReactNode } from 'react'

const ShouldResetEquationContext = createContext(false);
const SetShouldResetEquationContext = createContext<Dispatch<SetStateAction<boolean>>>(undefined);

export const useShouldResetEquation = () => useContext<boolean>(ShouldResetEquationContext);
export const useSetShouldResetEquation = () => useContext<Dispatch<SetStateAction<boolean>>>(SetShouldResetEquationContext);

interface ShouldResetEquationProviderProps {
    children: ReactNode
};

export const ShouldResetEquationProvider: FC<ShouldResetEquationProviderProps> = ({ children }) => {
    const [shouldResetEquation, setShouldResetEquation] = useState(false);
    
    return (
        <ShouldResetEquationContext.Provider value={shouldResetEquation}>
            <SetShouldResetEquationContext.Provider value={setShouldResetEquation}>
                {children}
            </SetShouldResetEquationContext.Provider>
        </ShouldResetEquationContext.Provider>
    );
};