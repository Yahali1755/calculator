import { FC } from 'react';

import { Key } from './key';
import { useCalculate } from '../hooks/useCalculate';

export const EqualsKey: FC = () => {
  const calculate = useCalculate();

  return (
    <Key onClick={calculate} label={'='}/>
  );
};