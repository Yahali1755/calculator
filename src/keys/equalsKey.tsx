import { FC } from 'react';
import { evaluate } from 'mathjs';

import { Key } from './key';
import { useSetCalculatorData } from '../contexts/calculatorStateContext';
import { isEquationEmpty, isLastKeyAnOperator } from '../utils/calculatorDataUtil';

export const EqualsKey: FC = () => {
  const setCalculatorData = useSetCalculatorData();
  
  const calculate = () => {
    setCalculatorData(({ equation, result }) => {
      if (isLastKeyAnOperator(equation)) {
        return {equation, result};
      };

      if (isEquationEmpty(equation)) {
        return {equation, result}
      }

      try {
        const newResult = evaluate(equation);

        const roundedNewResult = Math.round(newResult * 1000) / 1000;

        return {equation: "", result: roundedNewResult.toString()};
      } catch {
        return {equation: "", result: "Error"};
      }
    });
  };

  return (
    <Key onClick={calculate} label={'='}/>
  );
};