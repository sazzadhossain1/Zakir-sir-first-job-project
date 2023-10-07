import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import Home from "./component/Home/Home";
import Blog from "./component/Blog/Blog";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";
import Safety from "./component/Safety/Safety";
import Faq from "./component/Faq/Faq";
import Help from "./component/Help/Help";
import AboutUs from "./component/AboutUs/AboutUs";
import HowTripShipTaskWork from "./component/HowTripShipTaskWork/HowTripShipTaskWork";
import Media from "./component/Media/Media";
import Careers from "./component/Careers/Careers";
import WebMail from "./component/WebMail/WebMail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/safety",
          element: <Safety></Safety>,
        },
        {
          path: "/faq",
          element: <Faq></Faq>,
        },
        {
          path: "/help",
          element: <Help></Help>,
        },
        {
          path: "/aboutUs",
          element: <AboutUs></AboutUs>,
        },
        {
          path: "/howTripShipWork",
          element: <HowTripShipTaskWork></HowTripShipTaskWork>,
        },
        {
          path: "/media",
          element: <Media></Media>,
        },
        {
          path: "/careers",
          element: <Careers></Careers>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },
        {
          path: "/webMail",
          element: <WebMail></WebMail>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
