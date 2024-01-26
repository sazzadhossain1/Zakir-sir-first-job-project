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
import ChargePoints from "./component/ChargePoints/ChargePoints";
import SecurityDeposit from "./component/SecurityDeposit/SecurityDeposit";
import ReturnAndRefundPolicy from "./component/ReturnAndRefundPolicy/ReturnAndRefundPolicy";
import CancellationPolicy from "./component/CancellationPolicy/CancellationPolicy";
import GreenPass from "./component/GreenPass/GreenPass";
import Videos from "./component/Videos/Videos";
import RespectPolice from "./component/RespectPolice/RespectPolice";
import UnderstandingTripShipTask from "./component/UnderstandingTripShipTask/UnderstandingTripShipTask";
import SafetyAndSecurity from "./component/SafetyAndSecurity/SafetyAndSecurity";
import UsingThePlatform from "./component/UsingThePlatform/UsingThePlatform";
import FinancialAspects from "./component/FinancialAspects/FinancialAspects";
import ServiceSpecifics from "./component/ServiceSpecifics/ServiceSpecifics";
import CommunityAndSupport from "./component/CommunityAndSupport/CommunityAndSupport";
import RespectPolicy from "./component/RespectPolicy/RespectPolicy";
import SideRespectPolice from "./component/SideRespectPolice/SideRespectPolice";
import AboutTripShipTask from "./component/AboutTripShipTask/AboutTripShipTask";
import HowToSignUp from "./component/HowToSignUp/HowToSignUp";
import HowToLogin from "./component/HowToLogin/HowToLogin";
import HowToOpen from "./component/HowToOpen/HowToOpen";
import HowToRefer from "./component/HowToRefer/HowToRefer";

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
          path: "/chargePoints",
          element: <ChargePoints></ChargePoints>,
        },
        {
          path: "/securityDeposit",
          element: <SecurityDeposit></SecurityDeposit>,
        },
        {
          path: "/greenPass",
          element: <GreenPass></GreenPass>,
        },
        {
          path: "/respectPolice",
          element: <RespectPolice></RespectPolice>,
        },
        {
          path: "/understandingTripShipTask",
          element: <UnderstandingTripShipTask></UnderstandingTripShipTask>,
        },
        {
          path: "/safetyAndSecurity",
          element: <SafetyAndSecurity></SafetyAndSecurity>,
        },
        {
          path: "/usingThePlatform",
          element: <UsingThePlatform></UsingThePlatform>,
        },
        {
          path: "/financialAspects",
          element: <FinancialAspects></FinancialAspects>,
        },
        {
          path: "/serviceSpecifics",
          element: <ServiceSpecifics></ServiceSpecifics>,
        },
        {
          path: "/communityAndSupport",
          element: <CommunityAndSupport></CommunityAndSupport>,
        },
        {
          path: "/sideRespectPolice",
          element: <SideRespectPolice></SideRespectPolice>,
        },
        {
          path: "/videos",
          element: <Videos></Videos>,
        },
        {
          path: "/returnAndRefundPolicy",
          element: <ReturnAndRefundPolicy></ReturnAndRefundPolicy>,
        },
        {
          path: "/cancellationPolicy",
          element: <CancellationPolicy></CancellationPolicy>,
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

        // ------------ Nested Link start -------------- //
        {
          path: "/aboutTripShipTask",
          element: <AboutTripShipTask></AboutTripShipTask>,
        },
        {
          path: "/howToSignUp",
          element: <HowToSignUp></HowToSignUp>,
        },
        {
          path: "/howToLogin",
          element: <HowToLogin></HowToLogin>,
        },
        {
          path: "/howToOpen",
          element: <HowToOpen></HowToOpen>,
        },
        {
          path: "/howToRefer",
          element: <HowToRefer></HowToRefer>,
        },
        // ------------ Nested Link end-------------- //
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
