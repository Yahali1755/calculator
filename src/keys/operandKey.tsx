import { FC, useRef } from 'react';

import { Key, BaseKeyProps} from './key';
import { useAppendOperand } from '../hooks/useAppendOperand';

export const OperandKey: FC<BaseKeyProps> = ({ label }) => {
  const appendOperand = useAppendOperand();

  const handleKeyDown = (event) => {
    if (event.key === label) {
      appendOperand(label);
    }
  };
  
  return (
    <Key onClick={() => appendOperand(label)} onKeyDown={handleKeyDown} label={label}/>
  );
};