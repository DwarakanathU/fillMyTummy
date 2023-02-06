import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/header/About";
import Contact from "./components/header/Contact";
import ErrorComponent from "./utils/ErrorComponent";
import Footer from "./components/Footer";
import RestaurantPage from "./components/RestaurantPage";
import RestaurantItem from "./components/RestaurantItem";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage />,
        children: [],
      },
      {
        path: "/restaurant/:resId/:itemId",
        element: <RestaurantItem />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);
