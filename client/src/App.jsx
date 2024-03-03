import { useState } from 'react'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store'

import './App.css'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Login from './pages/login/Login'
import New from './component/new/New'
import Single from './pages/single/Single'
import Zone from './pages/zone/Zone'
import Apparail from './pages/apparail/Apparail'
import Reglage from './component/reglage/Reglage'
import Profile from './pages/profile/Profile'
import Rapport from './pages/Rapport/Rapport';
import { productInputs, userInputs } from './formSource';

function App() {

  return (
    <>
    <Provider store={store}>
      <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path="login" element={<Login />}/>
            <Route path="zones" element={<Zone />}/>
            <Route path="reglage" element={<Reglage />}/>
            <Route path="profile" element={<Profile />}/>
            <Route path="rapport" element={<Rapport />}/>
            
            <Route path="users">
              <Route index element={<List />}/>
              <Route path=":userID" element={<Single />}/>
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>
            <Route path="apparails">
              <Route index element={<Apparail />}/>
              <Route path=":appId" element={<Single />}/>
              <Route path="new" element={<New inputs={productInputs} title="Ajouter Nouveau Appareils"/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter> 
      </div>
      </Provider>
    </>
  )
}

export default App
