import { FC } from 'react';

import Key, { BaseKeyProps} from './key';
import { useSetCalculatorData } from '../../contexts/calculatorDataContext';
import { doesLastEquationOperandContainDot, isLastOperandZero, sliceLastKeyFromEquation } from '../../utils/calculatorDataUtil';
import { Operand } from '../../constants/operand';

const isDotKey = (key: string) => key === Operand.Dot;

const OperandKey: FC<BaseKeyProps> = ({ label }) => {
  const setCalculatorData = useSetCalculatorData();
  
  const appendOperand = () => setCalculatorData(({ equation }) => {
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

export default OperandKey;