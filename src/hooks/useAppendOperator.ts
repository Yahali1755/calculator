import { Operator } from '../constants/operator';
import { useSetCalculatorState } from '../contexts/calculatorStateContext';
import { isLastKeyAnOperator } from '../utils/operatorUtil';

const isTwoOperatorsConsecutively = (equation: string) => isLastKeyAnOperator(equation.substring(0, equation.length - 1));

const isLastKeyMinus = (equation: string) => equation.slice(-1) === Operator.Subtraction;

export const useAppendOperator = () => {
    const setCalculatorState = useSetCalculatorState();
    
    return (label: string) => {       
        setCalculatorState(({ equation, result }) => {
            if (isTwoOperatorsConsecutively(equation) || (isLastKeyMinus(equation) && label === Operator.Subtraction)) {
                return {equation, result}
            }

            if (isLastKeyAnOperator(equation) && label !== Operator.Subtraction) {
                return {equation: equation.substring(0, equation.length - 1).concat(label), result};
            };

            if (result === "Error") {
                return {equation: "0".concat(label), result}
            }

            if (equation === "") {
                return {equation: result.concat(label), result}
            }
    
            return {equation: equation.concat(label), result};
        })
    };
};