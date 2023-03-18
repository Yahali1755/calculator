import { FC } from 'react';

import { Key, BaseKeyProps } from './key'
import { useSetEquation } from '../../contexts/equationContext';
import { isLastKeyZero, sliceLastKeyFromEquation } from '../../utils/equationUtil';
import { useSetShouldResetEquation, useShouldResetEquation } from '../../contexts/shouldResetEquationContext';

export const OperandKey: FC<BaseKeyProps> = ({ label }) => {
  const setEquation = useSetEquation();
  const shouldResetEquation = useShouldResetEquation();
  const setShouldResetEquation = useSetShouldResetEquation();
  
  const onClick = () => setEquation(currentEquation => {
    if (shouldResetEquation) {
      setShouldResetEquation(false);

      return label;
    };

    if (isLastKeyZero(currentEquation)) {
      return sliceLastKeyFromEquation(currentEquation).concat(label);
    };

    return currentEquation.concat(label);
  });

  return (
    <Key onClick={onClick} label={label}/>
  );
};