import React, { useState } from 'react';
import './App.css';

function App (){

  const [select, setSelect] = useState(false); 
  
  const handleSelect = ()=>{
    setSelect(!select)  

  }  
    return (
      <div className="wrapper">
        <label><input onClick={handleSelect} type="checkbox" /> Mostrar información importante</label>
        {select ? 
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        :
        ''
        }
      </div>
    );
  
}

export default App;
