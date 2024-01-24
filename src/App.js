import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const location = useLocation();

  const [title, setTitle] = useState("Default Title");

  useEffect(() => {
    switch(location.pathname) {
      case '/': {
        document.title = t('Dashboard');
        break;
      }
      case '/log': {
        document.title = t('Log');
        break;
      }
      case '/wallet': {
        document.title = t('Wallet');
        break;
      }
      case '/settings': {
        document.title = t('Settings');
        break;
      }
      case '/info': {
        document.title = t('Info');
        break;
      }
      default: {
        document.title = 'Coedra';
        break;
      }
    }
  }, [location, setTitle]);
  
  
  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <Routes>
      <Route path='/' element={<DashboardLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route title='Info' path='/info' element={<Info/>}/>
        <Route title='Wallet' path='/wallet' element={<Wallet/>}/>
        <Route title='Log'path='/log' element={<Log/>}/>
      </Route>
      <Route path='*' element={<Notfoundpage/>} />
    </Routes>
  );
}

export default App;
