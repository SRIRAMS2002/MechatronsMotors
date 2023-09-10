import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Gallery from './routes/Gallery.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './routes/ErrorPage.jsx';
import Founders from './routes/Founders.jsx';
import Alumini from './routes/Alumini.jsx';
import Members from './routes/Members.jsx';
import Mentors from './routes/Mentors.jsx';
import Achievements from './routes/Achievements.jsx'
import Projects from './routes/Project.jsx'
import Contact from './routes/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "about",
    //     element: <About />,
    //   },
    // ],
  },
 
  {
    path: "Gallery",
    element: <Gallery />,
  },
  {
    path: "Achievements",
    element: <Achievements />,
  },
  {
    path: "Projects",
    element: <Projects/>,
  },
  {
    path: "Founders",
    element: <Founders />,
  },
  {
    path: "Alumini",
    element: <Alumini />,
  },
  {
    path: "Members",
    element: <Members />,
  },
  {
    path: "Mentors",
    element: <Mentors/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
  );