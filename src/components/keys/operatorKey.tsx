import { FC } from 'react';

import { Key, BaseKeyProps } from './key'
import { isOperandMinusKey } from '../../utils/operatorUtil';
import { useSetEquation } from '../../contexts/displayPanelDataContext';
import { useShouldResetEquation, useSetShouldResetEquation } from '../../contexts/placeholderContext';
import { defaultEquationValue, isResultError, handleMinusKeyClick, isLastKeyAnOperator } from '../../utils/equationUtil';

export const OperatorKey: FC<BaseKeyProps> = ({ label }) => {
  const setEquation = useSetEquation();
  const shouldResetEquation = useShouldResetEquation();
  const setShouldResetEquation = useSetShouldResetEquation();

  const appendOperator = () => setEquation(currentEquation => {
    if (shouldResetEquation) {
      setShouldResetEquation(false);

      if (isResultError(currentEquation)) {
        return `${defaultEquationValue} ${label} `; 
      };
    };

    if (isOperandMinusKey(label)) {
      return handleMinusKeyClick(currentEquation, label);
    };

    if (isLastKeyAnOperator(currentEquation)) {
      return currentEquation;
    };

    return currentEquation.concat(` ${label} `);
  });

  return (
    <Key onClick={appendOperator} label={label}/>
  );
};