import { FC } from 'react';

import { Key, BaseKeyProps} from './key';
import { useAppendOperand } from '../hooks/useAppendOperand';

export const OperandKey: FC<BaseKeyProps> = ({ label }) => {
  const appendOperand = useAppendOperand();
  
  return (
    <Key onClick={() => appendOperand(label)} label={label}/>
  );
};