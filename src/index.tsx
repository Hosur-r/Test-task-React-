import React from 'react';
import ReactDOM from 'react-dom/client';
import  './index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/main/Main";
import ErrorPage from "./pages/error/ErrorPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path:'',
        element: <MainPage/>,
        errorElement: <ErrorPage/>
    }
])

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
