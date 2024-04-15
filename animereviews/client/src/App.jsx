import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Review from "./pages/Review"
import Write from "./pages/Write"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from "./axios"
import { account } from "./features/authSlice"

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/review/:id",
        element: <Review />
      },
      {
        path: "/write",
        element: <Write />
      },
    ]
  }
])

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
      dispatch(account())
    }
  },[dispatch])

  return <RouterProvider router={router} />
}

export default App;
