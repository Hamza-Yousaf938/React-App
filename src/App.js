import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import ColorPalette from './Components/ColorPalette';
import About from './Components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [bgColor, setBgColor] = useState("gray");

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  const colors = ["#3498db", "#2ecc71", "#e74c3c", "#f39c12", "#9b59b6"];

  return (
    <>
      <Router>
        {/* Pass 'About' text so it appears in navbar */}
        <Navbar title="TextUtils" text="About" mode={mode} toggleMode={toggleMode} />

        <div style={{ backgroundColor: bgColor, padding: "20px", borderRadius: "5px", marginTop: "20px" }}>
        <h2>Click a color to change background</h2>
        <ColorPalette colors={colors} onColorSelect={setBgColor} />

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />

            <Route
              path="/"
              element={
                <>
                  <TextForm
                    showAlert={showAlert}
                    heading="Try  TextUtils - Word Counter, Character Counter, Copy Text"
                    mode={mode}
                  />

                 
                </>
              }
            />
          </Routes>
         </div>
        </div>
      </Router>
    </>
  );
}

export default App;
