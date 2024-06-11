import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from "./home";
import "./css/index.css"
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Login from "./login";
import Register from "./register";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "login",
        element:<Login/>
    },
    {
        path: "register",
        element:<Register/>
    }
]);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals(console.log);
