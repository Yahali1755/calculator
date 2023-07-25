import { FC } from 'react';

import { Key, BaseKeyProps} from './key';
import { useAppendOperator } from '../hooks/useAppendOperator';

export const OperatorKey: FC<BaseKeyProps> = ({ label }) => {
  const appendOperator = useAppendOperator();

  return (
    <Key onClick={() => appendOperator(label)} label={label}/>
  );
};