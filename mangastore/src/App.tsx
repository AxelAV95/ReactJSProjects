import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { cartTotal } from "./features/shopSlice";

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
  const {cartItems} = useAppSelector((state) => state.shop)
  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(cartTotal())
  }, [cartItems, dispatch])
  return <RouterProvider router={router}/>
}

export default App;
