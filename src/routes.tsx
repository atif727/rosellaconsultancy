// routes.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/about";
import Apply from "./pages/Apply";
import Countrys from "./pages/countrys/Countrys";
import SpecificCountry from "./pages/countrys/SpecificCountry";
import Signup from "./pages/authentication/signup";
import Login from "./pages/authentication/login";
import LabourVisa from "./pages/services/LabourVisa";
import StudentVisa from "./pages/services/StudentVisa";
import TouristVisa from "./pages/services/TouristVisa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "apply",
        element: <Apply />,
      },
      {
        path: "countrys",
        element: <Countrys />,
      },
      {
        path: "countrys/:country",
        element: <SpecificCountry />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "labourvisa",
        element: <LabourVisa />,
      },
      {
        path: "studentvisa",
        element: <StudentVisa />,
      },
      {
        path: "touristvisa",
        element: <TouristVisa />,
      },
    ],
  },
]);

export default router;
