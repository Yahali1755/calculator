import { useCalculatorState } from '../contexts/calculatorStateContext';

export const useClearEquation = () => {
    const { setCalculatorState } = useCalculatorState();
    
    const clearEquation = () => {
        setCalculatorState({result: '0', equation: ""});
    };

    return clearEquation;
}