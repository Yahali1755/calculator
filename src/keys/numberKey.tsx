import { FC } from 'react';

import { Key, BaseKeyProps} from './key';
import { useAppendNumber } from '../hooks/useAppendNumber';

export const NumberKey: FC<BaseKeyProps> = ({ label }) => {
  const appendNumber = useAppendNumber();
  
  return (
    <Key onClick={() => appendNumber(label)} label={label}/>
  );
};