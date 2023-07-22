import { FC } from 'react';

import { Key, BaseKeyProps} from './key';
import { useAppendOperator } from '../hooks/useAppendOperator';

export const OperatorKey: FC<BaseKeyProps> = ({ label }) => {
  const appendOperator = useAppendOperator();

  const handleKeyDown = (event) => {
    if (event.key === label) {
        appendOperator(label);
    }
  };

  return (
    <Key onClick={() => appendOperator(label)} onKeyDown={handleKeyDown} label={label}/>
  );
};