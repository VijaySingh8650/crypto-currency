import React from 'react'
import Sidebar from './components/sidebar';
import "./styles/global.css";
import AppRoutes from './router/router';

const App = () => {
  return (
    <div className='AppContainer'>
      <Sidebar/>
      <AppRoutes/>
    </div>
  )
}

export default App
