import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from './component/generalcomp/Errorpage.jsx';
import Moreproject from './component/section/Moreproject.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/More-project",
    element: <Moreproject/>,
    
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
     <RouterProvider router={router} />
   {/* <App/> */}
     

    
  </React.StrictMode>,
)
