import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const Layout = () =>{
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>  
    </>

  )
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  }
])

function App(){
  return <RouterProvider router={router}/>
}

export default App;
