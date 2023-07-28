import { useSetCalculatorState } from '../contexts/calculatorStateContext';
import { replaceOperatorsWithSpaces } from '../utils/operatorUtil';

export const isLastOperandZero = (equation: string) => replaceOperatorsWithSpaces(equation).split(' ').pop() === '0';

export const sliceLastKeyFromEquation = (equation: string) => equation.substring(0, equation.length - 1);

export const useAppendOperand = () => {
    const setCalculatorState = useSetCalculatorState();
    
    return (label: string) => {
        setCalculatorState(({ equation, result }) => {
            if (isLastOperandZero(equation)) {
                return {equation: sliceLastKeyFromEquation(equation).concat(label), result};
            };
        
            return {equation: equation.concat(label), result};
        });
    };
};