import { useSetCalculatorState } from '../contexts/calculatorStateContext';

const doesLastEquationOperandContainDot = (equation: string) => equation.split(' ').pop().includes('.');

export const useAppendDot = () => {
    const setCalculatorState = useSetCalculatorState();
    
    const appendDot = () => {
        setCalculatorState(({ equation, result}) => {
            if (doesLastEquationOperandContainDot(equation)) {
                return {equation, result};
            };

            return {equation: equation.concat('.'), result};
        });
    };

    return appendDot;
};