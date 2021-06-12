import Navigation from './Component/Navigation';
import Masthead from './Component/Masthead';
import Services from './Component/Services';
import Portfolio from './Component/Portfolio';
import About from './Component/About';
import Sweet from './Component/Sweet'
import React, { Component }  from 'react';
import ListUser from './Component/Connect';


function App(){
  return (
    <div className="App">
      
      <ListUser />
    </div>
  );
}

export default App;