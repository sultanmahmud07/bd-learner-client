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
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Premium from "../../Share/Premium/Premium";




export const routes =createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Course></Course>,
        loader: () => fetch('https://bd-learner-server.vercel.app/course')
      },
      {
        path: '/course',
        element: <Course></Course>,
        loader: () => fetch('https://bd-learner-server.vercel.app/course')
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({params}) => fetch(`https://bd-learner-server.vercel.app/category/${params.id}`)
      },
      {
        path: '/course/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`https://bd-learner-server.vercel.app/course/${params.id}`)
      },
      {
        path: '/premium',
        element: <PrivateRoutes><Premium></Premium></PrivateRoutes>
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