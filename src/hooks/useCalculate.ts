import { evaluate } from 'mathjs';

import { useSetCalculatorState } from '../contexts/calculatorStateContext';
import { isLastKeyAnOperator } from '../utils/calculatorDataUtil';

export const useCalculate = () => {
    const setCalculatorState = useSetCalculatorState();
    
    const calculate = () => {
        setCalculatorState(({ equation, result}) => {
            if (equation === "" || isLastKeyAnOperator(equation)) {
                return {equation, result}
            }
    
            try {
                const newResult = evaluate(equation);
    
                const roundedNewResult = Math.round(newResult * 1000) / 1000;
    
                return {equation: "", result: roundedNewResult.toString()};
            } catch {
                return {equation: "", result: "Error"};
            }
        });
    };

    return calculate;
};