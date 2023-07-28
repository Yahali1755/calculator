import { Operator } from '../constants/operator';
import { useSetCalculatorState } from '../contexts/calculatorStateContext';
import { isLastKeyAnOperator } from '../utils/operatorUtil';
import { sliceLastKeyFromEquation } from './useAppendOperand';

export const useAppendOperator = () => {
    const setCalculatorState = useSetCalculatorState();
    
    return (label: string) => {
        setCalculatorState(({ equation, result }) => {
            if (isLastKeyAnOperator(equation) && label !== Operator.Subtraction) {
                return {equation: sliceLastKeyFromEquation(equation).concat(label), result};
            };

            if (equation === "") {
                return {equation: result.concat(label), result: ""}
            }
    
            return {equation: equation.concat(label), result};
        })
    };
};