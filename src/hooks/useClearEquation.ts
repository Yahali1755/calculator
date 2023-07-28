import { useSetCalculatorState } from '../contexts/calculatorStateContext';

export const useClearEquation = () => {
    const setCalculatorState = useSetCalculatorState();
    
    return () => {
        setCalculatorState({result: '0', equation: ""});
    };
}