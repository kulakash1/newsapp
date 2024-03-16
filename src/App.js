import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import TextForm from './pages/TextForm';
import WebDevCard from './pages/WebDevCard';
import News from './pages/News';
import TechCardComp from './components/TechCardComp';
import Login from './pages/Login';

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  
  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert('Dark Mode is applied','success');
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Light Mode is applied','success');
    }
  }

  
  


  return (
    <>
    
    <Alert alert={alert} />
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={
        <>
        <Navbar title='AK' link='Links' mode={mode} toggleMode={toggleMode} />
        </>
      }/>

      <Route path='/About' element={
      <>
      <Navbar title='AK' link='Links' mode={mode} toggleMode={toggleMode} />
      <About mode={mode}/>
      </>
      } />
      
      <Route path='/TextForm' element={
      <>
      <Navbar title='AK' link='Links' mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Contact Me" mode={mode}/>
      </>
      } />

      <Route path='/News' element={
      <>
      <Navbar title='AK' link='Links' mode={mode} toggleMode={toggleMode} />
      <News/>
      </>
      } />
      
      <Route path='/webdev' element={
      <>
      <Navbar title='AK' link='Links' mode={mode} toggleMode={toggleMode} />
      <TechCardComp type='HTML' />
      </>
      } />

      <Route path='/login' element={
      <>
      <Navbar title='AK' link='Links' mode={mode} toggleMode={toggleMode} />
      {/* <TechCardComp type='HTML' /> */}
      <Login />
      </>
      } />

    </Routes>
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
