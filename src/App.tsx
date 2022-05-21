import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewExpenseBar from './components/NewExpenseBar';
import { ResumeBar } from './components/ResumeBar';
import { DataView } from './components/DataView';

function App() {
  return (
    <div className="text-white bg-slate-900 h-screen p-11"> 
      <h1 className='font-bold uppercase text-xl text-center mb-10'>Finances Control</h1>
      
      <ResumeBar/>

      <NewExpenseBar/>

      <div className='mt-10'>

        <DataView/>
      </div>

    </div>
  );
}

export default App;
