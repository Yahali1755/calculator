import { useCalculatorState } from "../contexts/calculatorStateContext";

export const useClearEquation = () => {
    const { setCalculatorState } = useCalculatorState();
    
    setCalculatorState({result: '0', equation: ""});
}