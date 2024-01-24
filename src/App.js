import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { Log } from './pages/Log';
import { Wallet } from './pages/Wallet';
import { Info } from './pages/Info';
import { Notfoundpage } from './pages/Notfoundpage';

import { DashboardLayout } from './components/DashboardLayout/DashboardLayout'

import ResetCSS from './styles/reset.css';
import Fonts from './styles/fonts.css';
import Styles from './styles/style.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashboardLayout/>}>
        <Route index element={<Dashboard/>} />
        <Route title='Info' path='/info' element={<Info/>} />
        <Route title='Wallet' path='/wallet' element={<Wallet/>} />
        <Route title='Log'path='/log' element={<Log/>} />
        
      </Route>
      <Route path='*' element={<Notfoundpage/>} />
    </Routes>
  );
}

export default App;
