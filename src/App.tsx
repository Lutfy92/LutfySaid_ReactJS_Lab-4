import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShowList from './Components/ShowList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExpenseTracker from './Components/ExpenseTracker';

function App() {
  const success = () => {
    return false
  }
  const cancel = () => {
    return false
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowList></ShowList>}></Route>
        <Route path='/add' element={<ExpenseTracker onTrue={success} onClose={cancel}></ExpenseTracker>}></Route>
        
      </Routes>
     </BrowserRouter>
    </div>

  );
}

export default App;
