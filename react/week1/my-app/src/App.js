import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoItems from './ToDoItem/ToDoItems';

function App() {
  return (
    <div className="App">
       

        <Header />
        <ToDoItems  />
        <Footer />
      </div>
    );
}

export default App;