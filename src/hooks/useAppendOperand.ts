import { useSetCalculatorState } from '../contexts/calculatorStateContext';

export const isLastOperandZero = (equation: string) => equation.split(' ').pop() === '0';

export const sliceLastKeyFromEquation = (equation: string) => equation.substring(0, equation.length - 1);

export const useAppendOperand = () => {
    const setCalculatorState = useSetCalculatorState();
    
    const appendOperand = (label: string) => {
        setCalculatorState(({ equation, result }) => {
            if (isLastOperandZero(equation)) {
                return {equation: sliceLastKeyFromEquation(equation).concat(label), result};
            };
        
            return {equation: equation.concat(label), result};
        });
    };

    return appendOperand;
};