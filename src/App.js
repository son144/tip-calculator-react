import React from 'react';
import './App.css';
import Input from "./components/input/Input";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <Footer />
    </div>
  );
}

export default App;