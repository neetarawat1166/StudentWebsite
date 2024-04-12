import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route,RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Login from './pages/Login/Login.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Assignment from './pages/Assignment/Assignment.jsx'
import Timetable from './pages/Timetable/Timetable.jsx'
import Query from './pages/Query/Query.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/assignment' element={<Assignment/>}/>
      <Route path='/timetable' element={<Timetable/>}/>
      <Route path='/query' element={<Query/>}/>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
