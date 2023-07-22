import { FC } from 'react';

import { Key } from './key';
import { useCalculate } from '../hooks/useCalculate';

export const EqualsKey: FC = () => {
  const calculate = useCalculate();

  const handleKeyDown = (event) => {
    if (event.key === "=") {
      calculate();
    }
  };

  return (
    <Key onClick={calculate} onKeyDown={handleKeyDown} label={'='}/>
  );
};