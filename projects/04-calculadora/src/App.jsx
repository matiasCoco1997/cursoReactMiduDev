import './App.css'

function App() {

  const tituloCabecera = 'Proyecto Calculadora';

  return (
    <>
      <div className='flex flex-col h-screen'>
        <header className='bg-navi h-28 flex items-center flex-wrap px-4'>
          <h1 className='text-white font-bold w-full'>{tituloCabecera}</h1>
          <p className='text-white'>Este proyecto es una calculadora desarrollada en React para practicar el uso de componentes, gestión de estado y estilos con Tailwind CSS, fortaleciendo habilidades en desarrollo web.</p>
        </header>

        <main className='bg-gray flex-grow p-4 flex items-center justify-center'>

          <div className='flex flex-col items-center w-[30%] h-[70%] p-4 border-2 border-gray-800 bg-gray-600 rounded-lg'> 
            
            <div className='w-full'>
              <input type='text' value='0' disabled  className='w-full p-6 h-full text-end text-3xl font-bold text-white rounded bg-gray-600 rounded border-2 border-gray-400'/>
            </div>

            <div className='flex w-full gap-2 mt-4 h-full'>
              <div className='w-[80%] grid grid-cols-3 gap-2'>
                <button className='rounded bg-gray-400 hover:bg-gray-500 text-white text-xl font-bold'>1</button>
                <button className='rounded bg-gray-400 hover:bg-gray-500 text-white text-xl font-bold'>2</button>
                <button className='rounded bg-gray-400 hover:bg-gray-500 text-white text-xl font-bold'>3</button>
                <button className='rounded bg-gray-400 hover:bg-gray-500 text-white text-xl font-bold'>4</button>
                <button className='rounded bg-gray-400 hover:bg-gray-500 text-white text-xl font-bold'>5</button>
                <button className='rounded bg-gray-400 hover:bg-gray-500 text-white text-xl font-bold'>6</button>
                <button className='rounded bg-gray-400 hover:bg-gray-500 text-white text-xl font-bold'>7</button>
                <button className='rounded bg-gray-400 hover:bg-gray-500 text-white text-xl font-bold'>8</button>
                <button className='rounded bg-gray-400 hover:bg-gray-500 text-white text-xl font-bold'>9</button>
                <button className='col-span-2 bg-gray-400 hover:bg-gray-500 rounded text-white text-xl font-bold'>0</button>
                <button className='rounded border-2 border-gray-400 hover:bg-orange-600 hover:border-orange-600 text-white text-xl font-bold'>AC</button>
              </div>
              
              <div className='flex flex-col w-[20%] gap-2 items-end'>
                <button className='rounded hover:bg-orange-500 bg-orange-600 text-white text-xl font-bold h-1/5 w-full'><i className="fa-solid fa-plus"></i></button>
                <button className='rounded hover:bg-orange-500 bg-orange-600 text-white text-xl font-bold h-1/5 w-full'><i className="fa-solid fa-minus"></i></button>
                <button className='rounded hover:bg-orange-500 bg-orange-600 text-white text-xl font-bold h-1/5 w-full'><i className="fa-solid fa-xmark"></i></button>               
                <button className='rounded hover:bg-orange-500 bg-orange-600 text-white text-xl font-bold h-1/5 w-full'><i className="fa-solid fa-divide"></i></button>
                <button className='rounded hover:bg-orange-500 bg-orange-600 text-white text-xl font-bold h-1/5 w-full'><i className="fa-solid fa-equals"></i></button>
              </div>
            </div>

          </div>
        </main>

        <footer className='bg-navi h-10 flex items-center px-4'>
          <p className='text-white'>Web developer: Coco Matías Ariel</p>
        </footer>
      </div>
    </>
  )
}

export default App
