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
import Feedback from './pages/Feedback/Feedback.jsx'
import Resources from '../src/pages/Resources/Resources.jsx'
import EmbeddedSystemSyllabus from '../src/pages/Syllabus/EmbeddedSystemSyllabus.jsx'
import DataScienceSyllabus from '../src/pages/Syllabus/DataScienceSyllabus.jsx'
import CloudComputingSyllabus from '../src/pages/Syllabus/CloudComputingSyllabus.jsx'
import FullStackSyllabus from '../src/pages/Syllabus/FullStackSyllabus.jsx'
import { IsAuthenticatedContextProvider } from './context/userContext.jsx'
import StudentList from '../src/teacherPages/StudentList/StudentList.jsx'
import { isAuthenticatedContext } from "../../Frontend/src/context/userContext.jsx";
import ProtectedRoute from './context/ProtectedRoute.jsx'


// const { isAuthenticat } = useContext(isAuthenticatedContext);
// console.log(isAuthenticat)
const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path ='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route  path="/signup" element={<Signup/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path='/assignment' element={<ProtectedRoute element={<Assignment/>} />} />
      <Route path='/resources' element={<ProtectedRoute element={<Resources/>} />} />
      <Route path='/fullstacksyllabus' element={<ProtectedRoute element={<FullStackSyllabus />} />} />
      <Route path='/embeddedsystemssyllabus' element={<ProtectedRoute element={<EmbeddedSystemSyllabus />} />} />
      <Route path='/datasciencesyllabus' element={<ProtectedRoute element={<DataScienceSyllabus/>} />} />
      <Route path='/cloudcomputingsyllabus' element={<ProtectedRoute element={<CloudComputingSyllabus/>} />} />
      <Route path='/studentlist' element={<ProtectedRoute element={<StudentList/>} />} />
      <Route path='/query' element={<ProtectedRoute element={<Query/>} />}/>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsAuthenticatedContextProvider>
      <RouterProvider router={router}/>
    </IsAuthenticatedContextProvider>
  </React.StrictMode>,
);

