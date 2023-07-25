import { Typography } from '@mui/material'
import { FC } from 'react';

import { useCalculatorState } from '../contexts/calculatorStateContext';
import { Operator } from '../constants/operator';

const styles = {
  displayPanel: {
    fontSize: '1.5vw', 
    backgroundColor: 'white',
    border: '1px solid black',
    height: '100%',
  }
};

export const DisplayPanel: FC  = () => {
  const { equation, result } = useCalculatorState();

  const formatEquation = (equation: string) => {
    const isOperator = (character: string) => Object.values(Operator).some(operator => operator === character);
    let formattedEquation = "";
    let lastCharacter = result;

    Array.from(equation).forEach(character => {
      if (isOperator(character)) {
        if (character === Operator.Subtraction && isOperator(lastCharacter)) {
          formattedEquation += ` ${character}`;
        }
        else {
          formattedEquation += ` ${character} `
        }
      }
      else {
        formattedEquation += character;
      }      

      lastCharacter = character;
    })

    return formattedEquation;
  }

  const formattedEquation = formatEquation(equation);

  return (
      <Typography display='flex' alignItems='center' justifyContent='center' sx={styles.displayPanel}>
           {formattedEquation ? formattedEquation : result} 
      </Typography>
  );
};