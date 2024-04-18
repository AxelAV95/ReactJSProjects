import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Dashboard from "./components/Dashboard"


// import './App.css'

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="p-4">
        <NavBar />
        <div><Outlet /></div>
      </div>

     
      {/* <Footer /> */}

    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard/>
      },
      {
        path: "/register",
        element: <div>Register</div>
      },
    ]
  }
])




function App() {

  return <RouterProvider router={router} />
}

export default App
