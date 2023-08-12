import { useSetCalculatorState } from '../contexts/calculatorStateContext';
import { replaceOperatorsWithSpaces } from '../utils/operatorUtil';

export const isLastNumberZero = (equation: string) => replaceOperatorsWithSpaces(equation).split(' ').pop() === '0';

export const useAppendNumber = () => {
    const setCalculatorState = useSetCalculatorState();
    
    return (label: string) => {
        setCalculatorState(({ equation, result }) => {
            if (isLastNumberZero(equation)) {
                return {equation: equation.substring(0, equation.length - 1).concat(label), result};
            };
        
            return {equation: equation.concat(label), result};
        });
    };
};