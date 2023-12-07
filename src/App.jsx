import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav';
import {  
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// import './App.css'
import Body from './components/Body';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' flex items-center min-h-screen min-w-full'>

      <div className=' z-50 fixed h-1/6'>
        <Nav/>
      </div>
      <div className=' h-full fixed overflow-auto w-full'>
        <Body/>
        {/* <img src={img1}/> */}
      {/* <Router>
        <Switch> */}
          {/* <Route exact path="/dashboard"><Dashboard/></Route>
          <Route exact path="/device"><Device data={itemList}/></Route>
          <Route exact path="/profile"><Profile/></Route> */}
        {/* </Switch>
      </Router> */}
      </div>
    </div>
  )
}

export default App
