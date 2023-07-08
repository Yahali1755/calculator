import { useContext, useState, FC, createContext, SetStateAction, Dispatch, ReactNode } from 'react'

interface CalculatorDataProps {
    equation: string;
    result: string;
}

interface CalculatorDataProviderProps {
    children: ReactNode;
}

const defaultCalculatorData = { 
    equation: '', 
    result: '0'
};

const CalculatorDataContext = createContext(defaultCalculatorData);
const SetCalculatorDataContext = createContext<Dispatch<SetStateAction<CalculatorDataProps>>>(null);

export const useCalculatorData = () => useContext<CalculatorDataProps>(CalculatorDataContext);
export const useSetCalculatorData = () => useContext<Dispatch<SetStateAction<CalculatorDataProps>>>(SetCalculatorDataContext);

export const CalculatorDataProvider: FC<CalculatorDataProviderProps> = ({ children }) => {
    const [calculatorData, setCalculatorData] = useState<CalculatorDataProps>(defaultCalculatorData);

    return (
        <CalculatorDataContext.Provider value={calculatorData}>
            <SetCalculatorDataContext.Provider value={setCalculatorData}>
                { children }
            </SetCalculatorDataContext.Provider>
        </CalculatorDataContext.Provider>
    );
};