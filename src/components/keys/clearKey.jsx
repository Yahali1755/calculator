import { CalculatorKey } from './calculatorKey'
import { useSetEquation } from '../../contexts/equationContext';
import { defaultEquationValue } from '../../utils/equation.util';

export const ClearKey = ({ label }) => {
    const setEquation = useSetEquation();

    const clearEquation = () => setEquation(defaultEquationValue);

    return (
        <CalculatorKey onClick={clearEquation} xs={6} label={label}/>
    )
}