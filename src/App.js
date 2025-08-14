// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import ColorPalette from './Components/ColorPalette';
// import About    from './Components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);  // whether dark mode is enabled or not

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils Dark Mode";
    }
    else {
      setMode('light');  
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils Light Mode";
    }
  }

  const colors = ["#3498db", "#2ecc71", "#e74c3c", "#f39c12", "#9b59b6"];
  const [bgColor, setBgColor] = useState("#ffffff");

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} text= "About" />
    
     <div style={{ backgroundColor: bgColor, height: "100vh", padding: "20px" }}>
      {/* <h1>Click a color to change background</h1> */}
      <ColorPalette colors={colors} onColorSelect={setBgColor} />
   

    <Alert alert={alert}/>
    <div className="container my-3">
       <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
       {/* <About/> */}
      </div>
      </div>
    
     </>
  );
}

export default App;
