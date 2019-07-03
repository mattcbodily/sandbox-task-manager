import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu'
import routes from './routes'
import './App.css'

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Header />
      <Menu />
      {routes}
    </div>
    </HashRouter>
  );
}

export default App;
