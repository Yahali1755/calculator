import { CalculatorKey } from './calculatorKey'
import { useSetEquation } from '../../contexts/equationContext';

export const ClearKey = ({ label }) => {
    const setEquation = useSetEquation();

    const clearEquation = () => setEquation('0');

    return (
        <CalculatorKey onClick={clearEquation} xs={6} label={label}/>
    )
}