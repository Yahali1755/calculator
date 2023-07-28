import { useSetCalculatorState } from '../contexts/calculatorStateContext';
import { replaceOperatorsWithSpaces } from '../utils/operatorUtil';

const doesLastEquationOperandContainDot = (equation: string) => replaceOperatorsWithSpaces(equation).split(' ').pop().includes('.');

export const useAppendDot = () => {
    const setCalculatorState = useSetCalculatorState();
    
    return () => {
        setCalculatorState(({ equation, result}) => {
            if (doesLastEquationOperandContainDot(equation)) {
                return {equation, result};
            };

            return {equation: equation.concat('.'), result};
        });
    };
};