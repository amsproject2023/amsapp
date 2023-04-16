import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter,Routes,Route,Link}from 'react-router-dom';
import Modalwindow from './modalonload.js';
function App() {
  return (
    <div className="App">
    <Modalwindow/>
    </div>
  );
}

export default App;
