import { FC } from 'react';

import { Key, BaseKeyProps } from './key'
import { isOperandMinusKey } from '../../utils/operatorUtil';
import { useSetDisplayPanelData } from '../../contexts/displayPanelDataContext';
import { getAdjustedEquationOnMinusKeyClick, isLastKeyAnOperator } from '../../utils/equationUtil';

export const OperatorKey: FC<BaseKeyProps> = ({ label }) => {
  const setDisplayPanelData = useSetDisplayPanelData();

  const appendOperator = () => setDisplayPanelData(({ equation, result }) => {
    if (result !== "") {
      return {equation: result.concat(` ${label} `), result: ""};
    }
    
    if (isOperandMinusKey(label)) {
      return {equation: getAdjustedEquationOnMinusKeyClick(equation, label), result: ""};
    };

    if (isLastKeyAnOperator(equation)) {
      return {equation, result: ""};
    };

    return {equation: equation.concat(` ${label} `), result: ""};
  });

  return (
    <Key onClick={appendOperator} label={label}/>
  );
};