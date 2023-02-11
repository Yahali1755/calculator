import { Key } from './Key'
import { useSetEquation } from '../../contexts/equationContext';
import { isEquationCleared } from '../../utils/equationUtil';
import { useSetShouldResetEquation, useShouldResetEquation } from '../../contexts/shouldResetEquationContext';

export const OperandKey = ({ label }) => {
  const setEquation = useSetEquation();
  const shouldResetEquation = useShouldResetEquation();
  const setShouldResetEquation = useSetShouldResetEquation();
  
  const onClick = () => setEquation(currentEquation => {
    if (shouldResetEquation) {
      setShouldResetEquation(false);

      return label;
    };

    if (isEquationCleared(currentEquation)) {
      return label;
    };

    return currentEquation.concat(label);
  });

  return (
    <Key onClick={onClick} label={label}/>
  );
};