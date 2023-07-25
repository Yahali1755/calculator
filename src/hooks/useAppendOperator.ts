import { useSetCalculatorState } from '../contexts/calculatorStateContext';
import { isLastKeyAnOperator } from '../utils/calculatorDataUtil';

export const useAppendOperator = () => {
    const setCalculatorState = useSetCalculatorState();
    
    const appendOperator = (label: string) => {
        setCalculatorState(({ equation, result }) => {
            if (isLastKeyAnOperator(equation)) {
                return {equation, result};
            };

            if (equation === "") {
                return {equation: result.concat(label), result: ""}
            }
    
            return {equation: equation.concat(label), result};
        })
    };

    return appendOperator;
};