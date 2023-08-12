import { Operator } from "../constants/operator";
import { isOperator } from "../utils/operatorUtil";

export const formatEquation = (equation: string) => 
    Array.from(equation).reduce((formattedEquation, character, index, array) => {
      if (isOperator(character)) {
        if (character === Operator.Subtraction && (isOperator(index && array[index]) || formattedEquation === "")) {
          formattedEquation += ` ${character}`;
        }
        else {
          formattedEquation += ` ${character} `
        }
      }
      else {
        formattedEquation += character;
      }      

      return formattedEquation;
    }, "");