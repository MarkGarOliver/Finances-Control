import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';

import Home from './pages/Home';

function App() {
  return (
    <div className="text-white bg-slate-900"> 



      <div className='absolute'>
        <NavBar/>
      </div>
        
      <div className="flex justify-end"> 
        <Home/>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
      

  );
}

export default App;
