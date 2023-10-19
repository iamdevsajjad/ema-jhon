import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Login from './Pages/Login/Login';
import Manage_Inventory from './Pages/Manage_Inventory/Manage_Inventory';
import Order_Review from './Pages/Order_Review/Order_Review';
import Shop from './Pages/Shop/Shop';
import Main from './Shared/Main/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path: "/",
        element: <Shop/>
      },
      {
        path: "/orderReview",
        element: <Order_Review/>
      },
      {
        path: "/manageInventory",
        element: <Manage_Inventory/>
      },
      {
        path: "/login",
        element: <Login/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
