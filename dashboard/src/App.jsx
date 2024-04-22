import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Sidebar2, { SidebarItem } from "./components/Sidebar2"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Dashboard from "./components/Dashboard"
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from "./lib/constants"
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'

const linkClass =
    'py-2 px-3 my-1 flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'


// import './App.css'

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar2>
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          
          <SidebarItem icon={link.icon} text={link.label} key={link.key} link={link}/>
        ))}
      <div className="flex flex-col pt-2 border-t border-neutral-700">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                    <SidebarItem icon={link.icon} text={link.label} key={link.key} link={link}/>
                ))}
                {/* <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div> */}
            </div>

      </Sidebar2>
      <div></div>
      <div className="flex flex-col flex-1 overflow-x-auto">
        <NavBar className="overflow-y-auto" />
        <div className="flex-1 p-4 min-h-0 overflow-auto "><Outlet /></div>
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
        element: <Dashboard />
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
