export  const doOperation = (num1, num2, operation, setResult, setNumberOne, setNumberTwo, setOperation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if(n1 === null || n2 === null){
        doReset(setNumberOne, setNumberTwo, setResult, setOperation);
        return
      }
    switch(operation){
      case '+':
        setResult(n1 + n2);
        setNumberOne(n1 + n2);
        setNumberTwo(null);
        break;
      case '-':
        setResult(n1 - n2);
        setNumberOne(n1 - n2);
        setNumberTwo(null);
        break;
      case 'x':
        setResult(n1 * n2);
        setNumberOne(n1 * n2);
        setNumberTwo(null);
        break;
      case '/':
        if(n2 === 0){
          setResult('Error al dividir con 0');
          setNumberOne(null);
          setNumberTwo(null);
          setOperation(null)
        } else{
          setResult(n1 / n2);
          setNumberOne(n1 / n2);
          setNumberTwo(null);
        }
        break;
    }
  }

  export const doReset = (setNumberOne, setNumberTwo, setResult, setOperation) => {
    setNumberOne(0);
    setNumberTwo(null);
    setResult('0');
    setOperation(null);
  }

  export const handleClick = (value, operation, numberOne, numberTwo, setNumberOne, setNumberTwo, setResult, setOperation) => {
      if(value === '+' || value === '-' || value === 'x' || value === '/'){
        setOperation(value);
        setResult(value);
      } else{
        if(operation){
          if(!numberTwo){
            setNumberTwo(value);
            setResult(value);
          } else{
            setNumberTwo(numberTwo + value);
            setResult(numberTwo + value);
          }
        } 
        else{
          if(!numberOne){
            setNumberOne(value);
            setResult(value);
          } else{
            setNumberOne(numberOne + value);
            setResult(numberOne + value);
          }
        } 
      }
    };