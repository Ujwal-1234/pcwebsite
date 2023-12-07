import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav';
import pl from './assets/pl.png'
import {  
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// import './App.css'
import Body from './components/Body';

function App() {
  const [add, setAdd] = useState(true)
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setAdd(false)
    }, 3000);
  }, []);
  return (
    add?<div className='w-screen min-h-screen bg-black flex items-center justify-center'>
        <a>
          <img src={pl} class=" fade-in"/>
        </a>
      </div>
      :
      <div className='w-screen min-h-screen bg-black flex items-center justify-center'>
        <div className=' bg-slate-100 hidden lg:block z-50 fixed top-0 lg:h-1/6'>
          <Nav/>
        </div>
        <div className=' bg-slate-900 h-full fixed overflow-auto w-full'>
          <Body/>
        </div>
      </div>
  )
}

export default App
