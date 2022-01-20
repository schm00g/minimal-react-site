import React from 'react';
import ReactDOM from 'react-dom';
// webpack bundling
import './index.css';
// import landscape from './images/landscape.jpg';
// import App from './App';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from "./components/Footer";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <img src={landscape} alt="mountain range"/> */}
    <Navbar />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
