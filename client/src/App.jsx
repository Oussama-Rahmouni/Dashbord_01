import { useState } from 'react'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'

import './App.css'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'

function App() {

  return (
    <>
      <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path="login" element={<Login />}/>
            <Route path="users">
              <Route index element={<List />}/>
              <Route path=":userID" element={<Single />}/>
              <Route path="new" element={<New />}/>
            </Route>
            <Route path="apparails">
              <Route index element={<List />}/>
              <Route path=":appId" element={<Single />}/>
              <Route path="new" element={<New />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter> 
      </div>
    </>
  )
}

export default App
