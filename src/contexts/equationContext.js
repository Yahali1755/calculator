import React, { useContext, useState } from 'react'

const EquationContext = React.createContext()

export const useEquation = () => useContext(EquationContext);

export const EquationProvider = ({ children }) => {
    const [equation, setEquation] = useState('0');
    
    return (
        <EquationContext.Provider value={{equation: equation, setEquation: setEquation}}>
            {children}
        </EquationContext.Provider>
    )
}