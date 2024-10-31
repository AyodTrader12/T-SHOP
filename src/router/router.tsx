import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Login from "../pages/Login";
import New from "../pages/New";
export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "New", element: <New /> },
      { path: "women", element: <Women /> },
      { path: "Men", element: <Men /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
