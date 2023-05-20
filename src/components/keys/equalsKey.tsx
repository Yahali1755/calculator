import { FC } from 'react';

import { Key, BaseKeyProps} from './key';
import { useSetDisplayPanelData } from '../../contexts/displayPanelDataContext';
import { isLastKeyAnOperator } from '../../utils/equationUtil';
import { evaluate } from 'mathjs';

export const EqualsKey: FC<BaseKeyProps> = ({ label }) => {
  const setDisplayPanelData = useSetDisplayPanelData();
  
  const calculate = () => 
    setDisplayPanelData(({equation, result }) => {
      if (isLastKeyAnOperator(equation)) {
        return {equation, result: ""};
      };

      if (equation === "") {
        return {equation: "", result}
      }

      try {
        const roundedResult = Math.round(evaluate(equation) * 1000) / 1000;

        return {equation: "", result: roundedResult.toString()};
      } catch {
        return {equation: "", result: "Error"};
      }
    });

  return (
    <Key onClick={calculate} label={label}/>
  );
};