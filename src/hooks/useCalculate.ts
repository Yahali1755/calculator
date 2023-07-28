import { evaluate } from 'mathjs';

import { useSetCalculatorState } from '../contexts/calculatorStateContext';
import { isLastKeyAnOperator } from '../utils/operatorUtil';

export const useCalculate = () => {
    const setCalculatorState = useSetCalculatorState();
    
    return () => {
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
};