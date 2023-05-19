import { FC } from 'react';

import { Key, BaseKeyProps } from './key'
import { useSetEquation } from '../../contexts/displayPanelDataContext';
import { doesLastEquationOperandContainDot, isLastOperandZero, sliceLastKeyFromEquation } from '../../utils/equationUtil';
import { useSetShouldResetEquation, useShouldResetEquation } from '../../contexts/placeholderContext';
import { isOperandDotKey } from '../../utils/operatorUtil';

export const OperandKey: FC<BaseKeyProps> = ({ label }) => {
  const setEquation = useSetEquation();
  const shouldResetEquation = useShouldResetEquation();
  const setShouldResetEquation = useSetShouldResetEquation();
  
  const appendOperand = () => setEquation(currentEquation => {
    if (shouldResetEquation) {
      setShouldResetEquation(false);

      return label;
    };

    if(doesLastEquationOperandContainDot(currentEquation) && isOperandDotKey(label)) {
      return currentEquation;
    } 

    if (isLastOperandZero(currentEquation) && !isOperandDotKey(label)) {
      return sliceLastKeyFromEquation(currentEquation).concat(label);
    };

    return currentEquation.concat(label);
  });

  return (
    <Key onClick={appendOperand} label={label}/>
  );
};