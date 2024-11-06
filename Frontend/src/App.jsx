import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import MyAccount from "./pages/MyAccount";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/navbar.jsx";
import Announcement from "./components/Announcement.jsx";
import Product from "./pages/Product.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
function App() {
  const Layout = () => {
    return (
      <>
        <Announcement />
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/create-account",
          element: <Register />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/myaccount",
          element: <MyAccount />,
        },
        {
          path: "/product/:productId",
          element: <Product />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
