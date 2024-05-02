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
import { AuthProvider } from './pages/Signup/AuthContext.jsx'
import Resources from '../src/pages/Resources/Resources.jsx'
import Syllabus from '../src/pages/Syllabus/Syllabus.jsx'
import TeacherAssignment from '../src/teacherPages/TeacherAssignment/TeacherAssignment.jsx'
import TeacherResources from '../src/teacherPages/TeacherResources/TeacherResources.jsx'
import TeacherSyllabus from '../src/teacherPages/TeacherSyllabus/TeacherSyllabus.jsx'
import TeacherDashboard from '../src/teacherPages/TeacherDashboard/TeacherDashboard.jsx'
// import ProtectedRoute from '../../Frontend/src/pages/Dashboard/ProtectedRoute.jsx'; // Import the ProtectedRoute component

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route  path="/signup" element={<Signup/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/dashboard-1' element={<TeacherDashboard/>}/>
      <Route path='/assignment' element={<Assignment/>}/>
      <Route path='/assignment-1' element={<TeacherAssignment/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/resources-1' element={<TeacherResources/>}/>
      <Route path='/syllabus' element={<Syllabus/>}/>
      <Route path='/syllabus-1' element={<TeacherSyllabus/>}/>
      <Route path='/timetable' element={<Timetable/>}/>
      <Route path='/query' element={<Query/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
);
