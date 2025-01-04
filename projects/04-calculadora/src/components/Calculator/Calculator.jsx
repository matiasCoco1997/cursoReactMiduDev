import { useState } from 'react';
import { BtnCalculator } from './BtnCalculator';
import { numbersCalculator , operationsCalculator } from '../../constants/calculatorButtons';
import { doOperation, doReset, handleClick } from '../../logic/calculatorFunctions';

export const Calculator = () => {

  const [numberOne, setNumberOne] = useState(null);
  const [numberTwo, setNumberTwo] = useState(null);
  const [result, setResult] = useState('0');
  const [operation, setOperation] = useState(null);

    return(
        <>
        <div className='flex flex-col items-center w-[30%] h-[70%] p-4 border-2 border-gray-800 bg-gray-600 rounded-lg'> 
            
            <div className='w-full'>
              <p className='w-full p-6 h-full text-end text-3xl font-bold text-white rounded bg-gray-600 rounded border-2 border-gray-400'>{result}</p>
            </div>

            <div className='flex w-full gap-2 mt-4 h-full'>
              <div className='w-[80%] grid grid-cols-3 gap-2'>
                {
                  numbersCalculator.map((number) => (
                    <BtnCalculator
                    key={number.id} 
                    className={number.className} 
                    onClick={() => number.value === 'AC' ? doReset(setNumberOne, setNumberTwo, setResult, setOperation) : handleClick(number.value, operation, numberOne, numberTwo, setNumberOne, setNumberTwo, setResult, setOperation)}>{number.value}</BtnCalculator>
                  ))
                }
              </div>
              
              <div className='flex flex-col w-[20%] gap-2 items-end'>
              {
                operationsCalculator.map((operation) => (
                  <BtnCalculator key={operation.id} className={operation.className} onClick={() => handleClick(operation.value, operation, numberOne, numberTwo, setNumberOne, setNumberTwo, setResult, setOperation)}> <i className={operation.symbol}></i> </BtnCalculator>
                ))
              }
                <BtnCalculator className='rounded hover:bg-orange-500 bg-orange-600 text-white text-xl font-bold h-1/5 w-full' onClick={() => doOperation(numberOne, numberTwo, operation, setResult, setNumberOne, setNumberTwo, setOperation)}><i className="fa-solid fa-equals"></i></BtnCalculator>
              </div>
            </div>

          </div>
        </>
    );
}