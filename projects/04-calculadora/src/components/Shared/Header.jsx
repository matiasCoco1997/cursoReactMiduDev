export const Header = () => {

    const tituloCabecera = 'Proyecto Calculadora';

    return (
        <header className='bg-navi h-28 flex items-center flex-wrap px-4'>
          <h1 className='text-white font-bold w-full'>{tituloCabecera}</h1>
          <p className='text-white'>Este proyecto es una calculadora desarrollada en React para practicar el uso de componentes, gestión de estado y estilos con Tailwind CSS, fortaleciendo habilidades en desarrollo web.</p>
        </header>
    )
}