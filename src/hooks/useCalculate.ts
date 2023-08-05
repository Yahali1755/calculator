import { evaluate } from 'mathjs';

import { useSetCalculatorState } from '../contexts/calculatorStateContext';
import { isLastKeyAnOperator } from '../utils/operatorUtil';

export const useCalculate = () => {
    const setCalculatorState = useSetCalculatorState();

    const isDivisionByZero = (equation: string) => equation.includes("/0");
    
    return () => {
        setCalculatorState(({ equation, result}) => {
            if (equation === "" || isLastKeyAnOperator(equation)) {
                return {equation, result}
            }

            if(isDivisionByZero(equation)) {
                return {equation: "", result: "Error"};
            }
    
            try {
                const newResult = evaluate(equation);
                
                const decimalPlaces = 3;
                const roundedNewResult = +newResult.toFixed(decimalPlaces);
    
                return {equation: "", result: roundedNewResult.toString()};
            } catch {
                return {equation: "", result: "Error"};
            }
        });
    };
};