
import { useEffect, useState } from 'react'
import { EffectFollowMouse } from './components/EffectFollowMouse';
import './App.css'

function App() {

  const [enable, setEnable] = useState(true);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMove = (event) => {
      const {clientX, clientY} = event;
      setMousePosition({x: clientX, y: clientY});
    }

    if(enable){
      window.addEventListener("pointermove", handleMove);
    }
    
    //limpieza de eventos suscriptos
    return ()=> {
      window.removeEventListener("pointermove", handleMove);
    }

   }, [enable]);

   const activateAnnimation = () => {
    setEnable(!enable);
   }

  return (
    <>
    <main>
      <EffectFollowMouse mousePosition={mousePosition} enable={enable}/>
      <button onClick={activateAnnimation}> {enable ? "Desactivar" : "Activar"} animación</button>
    </main>
    </>
  )
}

export default App
