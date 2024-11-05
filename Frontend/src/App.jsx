import Cart from "./pages/Cart"
import Home from "./pages/Home"
import {  RouterProvider,createBrowserRouter,Outlet } from "react-router-dom"
import MyAccount from "./pages/MyAccount"
import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar.jsx"
import Announcement from "./components/Announcement.jsx"
function App() {
const Layout=()=>{
  return <>
  <Announcement/>
  <Navbar />
  <Outlet/>
  <Footer/>
  </>
}

  
const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
    
      },, {
        path:"/cart",
        element:<Cart/>
    
      },
      {
        path:"/myaccount",
        element:<MyAccount/>
    
      }
    ]

  },

])
  return (
    <>
<RouterProvider router={router} />    
</>
  )
}

export default App
