import { useState } from 'react';
import './App.css';
import Navbar from './componenets/Navbar';
import Alert from './componenets/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './componenets/About';
import TextForm from './componenets/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [btnMode, setBtnMode] = useState('dark');
  const [h2Text, setH2Text] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  const [h2Color, setH2Color] = useState({
    color: 'black'
  });
  const [myStyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white"
  })
  const toggleMode = () => {
    if (mode === 'light') {
      showAlert('DARK MODE IS ENABLE', 'Success');
      setMode('dark');
      setH2Color({
        color: 'white'
      });
      setBtnMode('light');
      setH2Text('Enable light mode');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      setMystyle({
        color: 'white',
        backgroundColor: 'black'
      });
    }
    else {
      showAlert('DARK MODE IS DISABLED', 'Success');
      setMode('light');
      setH2Color({
        color: 'black',
      });
      setBtnMode('dark');
      setH2Text('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setMystyle({
        color: 'black',
        backgroundColor: 'white'
      });
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} h2Color={h2Color} h2Text={h2Text} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} myStyle={myStyle} btnMode={btnMode}/>}/>
        <Route exact path="/about" element={<About myStyle={myStyle}/>} />  
        </Routes>
      </div>
    </Router>
    </>
    );
}

export default App;
