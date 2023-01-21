import React, { useContext, useState } from 'react'

const ShouldResetEquationContext = React.createContext()
const SetShouldResetEquationContext = React.createContext()

export const useShouldResetEquation = () => useContext(ShouldResetEquationContext);
export const useSetShouldResetEquation = () => useContext(SetShouldResetEquationContext);

export const ShouldResetEquationProvider = ({ children }) => {
    const [shouldResetEquation, setShouldResetEquation] = useState(false);
    
    return (
        <ShouldResetEquationContext.Provider value={shouldResetEquation}>
            <SetShouldResetEquationContext.Provider value={setShouldResetEquation}>
                {children}
            </SetShouldResetEquationContext.Provider>
        </ShouldResetEquationContext.Provider>
    )
}