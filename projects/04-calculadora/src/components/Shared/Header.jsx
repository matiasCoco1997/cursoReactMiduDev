export const Header = () => {
  const tituloCabecera = "Proyecto Calculadora";

  return (
    <header className="bg-navi h-28 flex items-center flex-wrap px-4">
      <h1 className="text-white font-bold w-full">{tituloCabecera}</h1>
      <p className="text-white">
        Este proyecto es una calculadora desarrollada en React, creada para
        practicar la creación de componentes, la gestión de estados y la
        aplicación de estilos con Tailwind CSS, lo que permite fortalecer
        habilidades en desarrollo web y mejorar la capacidad para gestionar
        interacciones entre componentes y su estado.
      </p>
    </header>
  );
};
