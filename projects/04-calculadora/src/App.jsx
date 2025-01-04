import './App.css'
import { Calculator } from './components/Calculator/Calculator';
import { Footer } from './components/Shared/Footer';
import { Header } from './components/Shared/Header';

function App() {

  

  return (
    <>
      <div className='flex flex-col h-screen'>
        
        <Header/>
        
        <main className='bg-gray flex-grow p-4 flex items-center justify-center'>
          <Calculator/>
        </main>

        <Footer/>
      </div>
    </>
  )
}

export default App
