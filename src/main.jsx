import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Router from './component/route/Router.jsx';
import Home from './component/page/home/Home.jsx';
import Category from './component/page/category/Category.jsx';
import SignIn from './component/page/sign-in/SignIn.jsx';
import SignUp from './component/page/sign-up/SignUp.jsx';
import Shop from './component/page/shop/Shop.jsx';
import Blog from './component/page/blog/Blog.jsx';
import AboutUs from './component/page/aboutus/AboutUs.jsx';
import ConTact from './component/page/contact/ConTact.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contact",
        element: <ConTact></ConTact>
      },
      {
        path: "/category",
        element: <Category></Category>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
