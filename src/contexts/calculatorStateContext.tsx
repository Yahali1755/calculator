import { useContext, useState, FC, createContext, SetStateAction, Dispatch, ReactNode, useMemo } from 'react'

const defaultCalculatorData = { 
    equation: '', 
    result: '0'
};

interface CalculatorStateProps {
    equation: string,
    result: string
}

const CalculatorStateContext = createContext(defaultCalculatorData);
const SetCalculatorStateContext = createContext(null);

export const useCalculatorState = () => useContext<CalculatorStateProps>(CalculatorStateContext);
export const useSetCalculatorState = () => useContext<Dispatch<SetStateAction<CalculatorStateProps>>>(SetCalculatorStateContext);

export const CalculatorStateProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [calculatorState, setCalculatorState] = useState<CalculatorStateProps>(defaultCalculatorData);

    return (
        <SetCalculatorStateContext.Provider value={setCalculatorState}>
            <CalculatorStateContext.Provider value={calculatorState}>
                { children }
            </CalculatorStateContext.Provider>
        </SetCalculatorStateContext.Provider>
    );
};