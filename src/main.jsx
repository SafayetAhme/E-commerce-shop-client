import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './component/route/Router.jsx';
import Home from './component/page/home/Home.jsx';
import Category from './component/page/category/Category.jsx';
import SignIn from './component/page/sign-in/SignIn.jsx';
import SignUp from './component/page/sign-up/SignUp.jsx';
import Shop from './component/page/shop/Shop.jsx';
import Blog from './component/page/blog/Blog.jsx';
import AboutUs from './component/page/aboutus/AboutUs.jsx';
import ConTact from './component/page/contact/ConTact.jsx';
import UserDashboard from './component/page/userdashboard/UserDashboard.jsx';
import UserProfile from './component/page/userdashboard/UserProfile.jsx';
import UserInformation from './component/page/userdashboard/UserInformation.jsx';
import UserPassword from './component/page/userdashboard/UserPassword.jsx';
import AdminDashboard from './component/page/admindashboard/AdminDashboard.jsx';
import AdminHome from './component/page/admindashboard/AdminHome.jsx';
import PaymentHistory from './component/page/admindashboard/PaymentHistory.jsx';
import AllUser from './component/page/admindashboard/AllUser.jsx';
import ManageItems from './component/page/admindashboard/ManageItems.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MenusDetails from './component/page/MenusDetails.jsx/MenusDetails.jsx';

const queryClient = new QueryClient()

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
        path: "/menusdetails/:id",
        element: <MenusDetails></MenusDetails>,
        loader: () => fetch('http://localhost:5000/menus')
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

  // user related dahsboard
  {
    path: "userdashboard",
    element: <UserDashboard></UserDashboard>,
    children: [
      {
        path: "userprofile",
        element: <UserProfile></UserProfile>
      },
      {
        path: "userinfo",
        element: <UserInformation></UserInformation>
      },
      {
        path: "userpassword",
        element: <UserPassword></UserPassword>
      }
    ]
  },


  // admin related dahsboard
  {
    path: "adminDashboard",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>
      },
      {
        path: "paymenthhistory",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "alluser",
        element: <AllUser></AllUser>
      },
      {
        path: "manageitem",
        element: <ManageItems></ManageItems>
      },
    ]
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
