export const handleReset = (setCalculatorState) => {
  setCalculatorState({
    numberOne: null,
    numberTwo: null,
    result: "0",
    operation: null,
  });
};

export const handleButtonClick = (
  value,
  setCalculatorState,
  calculatorState
) => {
  const { numberOne, numberTwo, operation } = calculatorState;

  if (value === "AC") {
    handleReset(setCalculatorState);
    return;
  }
  
  if(verificateNumber(value) && !operation){
    setCalculatorState({
        ...calculatorState,
        numberOne: numberOne && numberOne !== '0' ? numberOne + value : value,
        result: numberOne ? numberOne + value : value,
    });
  } 
  
  else if( numberOne && operation && verificateNumber(value)){
    setCalculatorState({
        ...calculatorState,
        numberTwo: numberTwo && numberTwo !== '0' ? numberTwo + value : value,
        result: numberTwo ? numberTwo + value : value,
    });
  } 
  
  else{

    if(!numberOne && !verificateNumber(value)){
        setCalculatorState({
            ...calculatorState,
            result: "Error, se debe ingresar un número"
        });
    } else{
        setCalculatorState({
            ...calculatorState,
            operation: value,
            result: value,
        });
    }
  }
};

export const handleOperation = (calculatorState, setCalculatorState) => {
  const { numberOne, numberTwo, operation } = calculatorState;

  const n1 = numberOne ? parseFloat(numberOne) : 0;
  const n2 = parseFloat(numberTwo);

  if (numberOne && numberTwo && operation) {
    let result = 0;

    switch (operation) {
      case "+":
        result = n1 + n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "x":
        result = n1 * n2;
        break;
      case "/":
        if (n1 !== 0 && n2 === 0) {
          result = null;
        } else {
          result = n1 / n2;
        }
        break;
      default:
        result = "Error";
        break;
    }

    let updatedState = {};

    if (result === null) {
      updatedState = {
        numberOne: null,
        numberTwo: null,
        result: "Error al dividir por cero",
        operation: null,
      };
    } else {
      updatedState = {
        numberOne: result.toString(),
        numberTwo: null,
        result: result.toString(),
        operation: null,
      };
    }

    setCalculatorState(updatedState);
  }

  console.log(calculatorState);
};



//funciones sin exportar
const verificateNumber = (value) => {
    const posibleNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    return posibleNumber.includes(value);
};