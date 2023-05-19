import { FC } from 'react';

import { Key, BaseKeyProps} from './key';
import { useSetEquation } from '../../contexts/displayPanelDataContext';
import { useSetShouldResetEquation } from '../../contexts/placeholderContext';
import { isResultError, isLastKeyAnOperator } from '../../utils/equationUtil';
import { evaluate } from 'mathjs';

export const EqualsKey: FC<BaseKeyProps> = ({ label }) => {
  const setEquation = useSetEquation();
  const setShouldResetEquation = useSetShouldResetEquation();
  
  const calculate = () => 
    setEquation(currentEquation => {
      if (isLastKeyAnOperator(currentEquation) || isResultError(currentEquation)) {
        return currentEquation;
      };

      setShouldResetEquation(true);

      try {
        const result = evaluate(currentEquation);

        const roundedResult = Math.round(result * 1000) / 1000;

        return roundedResult.toString();
      } catch {
        return 'Error';
      }
    });

  return (
    <Key xs={6} onClick={calculate} label={label}/>
  );
};