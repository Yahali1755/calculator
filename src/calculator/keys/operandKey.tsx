import { FC } from 'react';

import { Key, BaseKeyProps } from './key'
import { useSetDisplayPanelData } from '../../contexts/displayPanelDataContext';
import { doesLastEquationOperandContainDot, isLastOperandZero, sliceLastKeyFromEquation } from '../../utils/equationUtil';
import { isDotKey } from '../../utils/operandUtil';

export const OperandKey: FC<BaseKeyProps> = ({ label }) => {
  const setDisplayPanelData = useSetDisplayPanelData();
  
  const appendOperand = () => setDisplayPanelData(({ equation }) => {
    if(doesLastEquationOperandContainDot(equation) && isDotKey(label)) {
      return {equation, result: ""};
    } 

    if (isLastOperandZero(equation) && !isDotKey(label)) {
      return {equation: sliceLastKeyFromEquation(equation).concat(label), result: ""};
    };

    return {equation: equation.concat(label), result: ""};
  });

  return (
    <Key onClick={appendOperand} label={label}/>
  );
};