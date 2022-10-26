import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Share/Blog/Blog";
import Home from "../../Share/Home/Home";
import Login from "../../Share/Login/Login";
import Register from "../../Share/Register/Register";
import Course from "../../Share/Course/Course";
import Category from "../../Category/Category";
import Details from "../../Share/Details/Details";
import Error from "../../Share/Error/Error";




export const routes =createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Course></Course>,
        loader: () => fetch('http://localhost:5000/course')
      },
      {
        path: '/course',
        element: <Course></Course>,
        loader: () => fetch('http://localhost:5000/course')
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
      },
      {
        path: '/course/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
      }
      
    ]
  },

  // Endipendant routers
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/blog',
    element: <Blog></Blog>
  }
])