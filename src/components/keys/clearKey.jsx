import { CalculatorKey } from './calculatorKey'
import { useEquation } from '../../contexts/equationContext';

export const ClearKey = ({ label }) => {
    const { setEquation } = useEquation();

    const clearEquation = () => setEquation('0');

    return (
        <CalculatorKey onClick={clearEquation} xs={6} label={label}/>
    )
}