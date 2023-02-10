import { Key } from './Key'
import { useSetEquation } from '../../contexts/equationContext';
import { defaultEquationValue } from '../../utils/equation.util';

export const ClearKey = ({ label }) => {
    const setEquation = useSetEquation();

    const clearEquation = () => setEquation(defaultEquationValue);

    return (
        <Key onClick={clearEquation} xs={6} label={label}/>
    )
}