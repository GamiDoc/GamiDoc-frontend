import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';



function Form() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header/>

      <h1>Open access database</h1>

      <Footer/>
    </div>
  );
}

export default App;
