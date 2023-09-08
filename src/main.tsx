import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from './pages/Error-page.tsx'
import './index.css'
import AboutUs from './pages/AboutUs.tsx'
import { Home } from './pages/home/Home.tsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactUs from './pages/ContactUs.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/AboutUs/1",
    element: <AboutUs/>,
  },
  {
    path: "/ContactUs/1",
    element: <ContactUs/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
