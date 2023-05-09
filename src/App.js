import React from 'react'
import './App.css';
import PageN1 from './Pages/PageN1';
import PageN2 from './Pages/PageN2';
import PageN3 from './Pages/PageN3';
import PageN4 from './Pages/PageN4';
import PageN5 from './Pages/PageN5';
import PageN6 from './Pages/PageN6';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageN1/>,
  },
  {
    path: "shop",
    element: <PageN2/>,
  },
  {
    path: "faq",
    element: <PageN3/>,
  },
  {
    path: "stock",
    element: <PageN4/>,
  },
  {
    path: "wholesale",
    element: <PageN5/>,
  },
  {
    path: "contact",
    element: <PageN6/>,
  },
]);



function App() {
  return (
    <div className='main-container-1'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
