import Navbar from './components/Navbar'
 import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [alert,setAlert]=useState(null);
  const [mode,setMode]=useState('light');
  const [enable,setEnable]=useState('Dark mode');
  const [MyStyle,setMyStyle]=useState({
    color:'black',
    backgroundColor:'white',
    border:'1 px'
  })
  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=> {
      setAlert(null);
    },2000);
  }
  const handleonclick=()=>{
    console.log('clicked')
    if(mode==='light'){
      setMode('dark');
      setEnable('Light mode')
      document.body.style.backgroundColor='#3d5c95';
      showalert("Dark mode is enabled","success");
    }
    else{
      setEnable('Dark mode') 
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode is enabled","success");
    }
    if(MyStyle.color==='white'){
      
      setMyStyle ({
        color:'black',
        backgroundColor:'white',
        border:'1px solid white'
      })
      
    }
    else{
      
      setMyStyle ({
        color:'white',
        backgroundColor:'black'
      })
    }
      
    }




  return (
<>
<Router>
<Navbar mode={mode} darkmode={handleonclick} enable={enable} title="TextUtls"/>
<Alert alert={alert} />
<div className="container my-4">
<div className="container">
<Routes>
      <Route exact path="/" element={ <TextForm  heading="text to uppercase" mode={mode}  />}/>
  
      <Route exact path="/about" element={ <About mode={mode} MyStyle={MyStyle}/>}/>
     
    
 </Routes>     
     
 

</div>  

</div>
</Router>
</>
  );
}

export default App;
