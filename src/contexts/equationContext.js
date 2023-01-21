import React, { useContext, useState } from 'react'

const EquationContext = React.createContext()
const SetEquationContext = React.createContext()

export const useEquation = () => useContext(EquationContext);
export const useSetEquation = () => useContext(SetEquationContext);

export const EquationProvider = ({ children }) => {
    const [equation, setEquation] = useState('0');
    
    return (
        <EquationContext.Provider value={equation}>
            <SetEquationContext.Provider value={setEquation}>
                {children}
            </SetEquationContext.Provider>
        </EquationContext.Provider>
    )
}