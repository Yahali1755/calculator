import { FC } from 'react';

import { Key, BaseKeyProps } from './key'
import { useSetDisplayPanelData } from '../../contexts/displayPanelDataContext';
import { doesLastEquationOperandContainDot, isLastOperandZero, sliceLastKeyFromEquation } from '../../utils/equationUtil';
import { isOperandDotKey } from '../../utils/operatorUtil';

export const OperandKey: FC<BaseKeyProps> = ({ label }) => {
  const setDisplayPanelData = useSetDisplayPanelData();
  
  const appendOperand = () => setDisplayPanelData(({ equation }) => {
    if(doesLastEquationOperandContainDot(equation) && isOperandDotKey(label)) {
      return {equation, result: ""};
    } 

    if (isLastOperandZero(equation) && !isOperandDotKey(label)) {
      return {equation: sliceLastKeyFromEquation(equation).concat(label), result: ""};
    };

    return {equation: equation.concat(label), result: ""};
  });

  return (
    <Key onClick={appendOperand} label={label}/>
  );
};