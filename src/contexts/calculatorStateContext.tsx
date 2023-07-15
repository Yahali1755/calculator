import { useContext, useState, FC, createContext, SetStateAction, Dispatch, ReactNode } from 'react'

interface CalculatorStateProps {
    equation: string,
    result: string
}

const defaultCalculatorData = { 
    equation: '', 
    result: '0'
};

interface CalculatorStateProviderProps {
    calculatorState: CalculatorStateProps,
    setCalculatorState: Dispatch<SetStateAction<CalculatorStateProps>>
}

const CalculatorStateContext = createContext({calculatorState: defaultCalculatorData, setCalculatorState: null});

export const useCalculatorState = () => useContext<CalculatorStateProviderProps>(CalculatorStateContext);

export const CalculatorStateProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [calculatorState, setCalculatorState] = useState<CalculatorStateProps>(defaultCalculatorData);

    return (
        <CalculatorStateContext.Provider value={{calculatorState, setCalculatorState}}>
            { children }
        </CalculatorStateContext.Provider>
    );
};