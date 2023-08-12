import { useSetCalculatorState } from '../contexts/calculatorStateContext';

export const useBackspace = () => {
    const setCalculatorState = useSetCalculatorState();
    
    return () => {
        setCalculatorState(({ equation }) => {
            return {equation: equation.length ? equation.substring(0, equation.length - 1) : "", result: "0"};
        });
    };
};