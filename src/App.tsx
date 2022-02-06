import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ImgGallery} from "./components/ImgGallery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Ily Cakes</h1>
        <p className="cake">🎂</p>
        <ImgGallery />
      </header>
    </div>
  );
}

export default App;
