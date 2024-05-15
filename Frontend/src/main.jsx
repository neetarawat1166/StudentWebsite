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
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/assignment' element={<Assignment/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/fullstacksyllabus' element={<FullStackSyllabus/>}/>
      <Route path='/embeddedsystemssyllabus' element={<EmbeddedSystemSyllabus/>}/>
      <Route path='/datasciencesyllabus' element={<DataScienceSyllabus/>}/>
      <Route path='/cloudcomputingsyllabus' element={<CloudComputingSyllabus/>}/>
      <Route path='/studentlist' element={<StudentList/>}/>
      <Route path='/query' element={<Query/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
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

// import React, { useState, useContext } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate
// } from 'react-router-dom';
// import Layout from './Layout.jsx';
// import Home from './pages/Home/Home.jsx';
// import About from './pages/About/About.jsx';
// import Contact from './pages/Contact/Contact.jsx';
// import Signup from './pages/Signup/Signup.jsx';
// import Login from './pages/Login/Login.jsx';
// import Dashboard from './pages/Dashboard/Dashboard.jsx';
// import Assignment from './pages/Assignment/Assignment.jsx';
// import Timetable from './pages/Timetable/Timetable.jsx';
// import Query from './pages/Query/Query.jsx';
// import Feedback from './pages/Feedback/Feedback.jsx';
// import Resources from '../src/pages/Resources/Resources.jsx';
// import EmbeddedSystemSyllabus from '../src/pages/Syllabus/EmbeddedSystemSyllabus.jsx';
// import DataScienceSyllabus from '../src/pages/Syllabus/DataScienceSyllabus.jsx';
// import CloudComputingSyllabus from '../src/pages/Syllabus/CloudComputingSyllabus.jsx';
// import FullStackSyllabus from '../src/pages/Syllabus/FullStackSyllabus.jsx';
// import { IsAuthenticatedContextProvider, isAuthenticatedContext } from './context/userContext.jsx';
// import StudentList from '../src/teacherPages/StudentList/StudentList.jsx';

// const App = () => {
//   const { isAuthenticat } = useContext(isAuthenticatedContext);

//   return (
//     <Layout>
//       <Routes>
//         <Route path='' element={<Home/>} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path='/login' element={<Login />} />
//         {isAuthenticat ? (
//           <>
//             <Route path='/dashboard' element={<Dashboard />} />
//             <Route path='/assignment' element={<Assignment />} />
//             <Route path='/resources' element={<Resources />} />
//             <Route path='/fullstacksyllabus' element={<FullStackSyllabus />} />
//             <Route path='/embeddedsystemssyllabus' element={<EmbeddedSystemSyllabus />} />
//             <Route path='/datasciencesyllabus' element={<DataScienceSyllabus />} />
//             <Route path='/cloudcomputingsyllabus' element={<CloudComputingSyllabus />} />
//             <Route path='/studentlist' element={<StudentList />} />
//             <Route path='/query' element={<Query />} />
//             <Route path='/feedback' element={<Feedback />} />
//           </>
//         ) : (
//           <Route path="*" element={<Navigate to="/login" />} />
//         )}
//       </Routes>
//     </Layout>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <IsAuthenticatedContextProvider>
//       <Router>
//         <App />
//       </Router>
//     </IsAuthenticatedContextProvider>
//   </React.StrictMode>
// );
