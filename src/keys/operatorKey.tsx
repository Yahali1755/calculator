import { FC } from 'react';

import { Key, BaseKeyProps} from './key';
import { isMinusKey } from '../utils/operatorUtil';
import { useSetCalculatorData } from '../contexts/calculatorStateContext';
import { getAdjustedEquationOnMinusKeyClick, isLastKeyAnOperator, isResultEmpty } from '../utils/calculatorDataUtil';

export const OperatorKey: FC<BaseKeyProps> = ({ label }) => {
  const setCalculatorData = useSetCalculatorData();

  const appendOperator = () => {
    setCalculatorData(({ equation, result }) => {
      if (!isResultEmpty(result)) {
        return {equation: result.concat(` ${label} `), result: ""};
      }
      
      if (isMinusKey(label)) {
        return {equation: getAdjustedEquationOnMinusKeyClick(equation), result: ""};
      };

      if (isLastKeyAnOperator(equation)) {
        return {equation, result: ""};
      };

      return {equation: equation.concat(` ${label} `), result: ""};
    });
  };

  return (
    <Key onClick={appendOperator} label={label}/>
  );
};