import { useSetCalculatorState } from '../contexts/calculatorStateContext';

export const useClearEquation = () => {
    const setCalculatorState = useSetCalculatorState();
    
    const clearEquation = () => {
        setCalculatorState({result: '0', equation: ""});
    };

    return clearEquation;
}