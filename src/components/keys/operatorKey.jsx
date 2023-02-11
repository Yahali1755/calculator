import { Key } from './Key'
import { isMinusKey } from '../../utils/operatorUtil';
import { useSetEquation } from '../../contexts/equationContext';
import { useShouldResetEquation, useSetShouldResetEquation } from '../../contexts/shouldResetEquationContext';
import { defaultEquationValue, isResultError, adjustEquationOnMinusKeyClick, isLastKeyAnOperator } from '../../utils/equationUtil';

export const OperatorKey = ({ label }) => {
  const setEquation = useSetEquation();
  const shouldResetEquation = useShouldResetEquation();
  const setShouldResetEquation = useSetShouldResetEquation();

  const onClick = () => setEquation(currentEquation => {
    if (shouldResetEquation) {
      setShouldResetEquation(false);

      if (isResultError(currentEquation)) {
        return `${defaultEquationValue} ${label} `; 
      };
    };

    if (isMinusKey(label)) {
      return adjustEquationOnMinusKeyClick(currentEquation, label);
    };

    if (isLastKeyAnOperator(currentEquation)) {
      return currentEquation;
    };

    return currentEquation.concat(` ${label} `);
  });

  return (
    <Key onClick={onClick} label={label}/>
  );
};