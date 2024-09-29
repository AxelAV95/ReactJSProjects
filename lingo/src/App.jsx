import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import NavBar from "./components/navbar"
import Main from "./components/main"
import Learn from "./pages/learn"
import Footer from "./components/footer"


const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#235390] text-white">
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};




const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/learn",
        element: <Learn/>
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router} />
  // return (
  //   <>
  //     <h1 className="text-3xl font-bold underline">
  //       Hello world!
  //     </h1>
  //   </>
  // )
}

export default App
