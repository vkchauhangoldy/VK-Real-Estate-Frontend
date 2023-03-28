import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/Navigation/MainNavigation";
import HomePage from "./components/HomePage/HomePage";
import PropertyNavbar from "./components/PropertyNavbar/PropertyNavbar";
import BasicInfoForm from "./components/PropertyForms/BasicInfoForm";
import PropertyDetailForm from "./components/PropertyForms/PropertyDetailForm";
import GeneralInfoForm from "./components/PropertyForms/GeneralInfoForm";
import LocationInfoForm from "./components/PropertyForms/LocationInfoForm";
import SignUpForm from "./components/UserAuthForms/SignUpForm";
import SignInForm from "./components/UserAuthForms/SignInForm";
import MainPage from "./components/MainPage/MainPage";
import { checkAuthLoader } from "./utils/auth";
import EditPropertyForm from "./components/PropertyForms/EditPropertyForm";
import UserPropertyPage from "./components/HomePage/UserPropertyPage";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  {
    path: "user",
    element: <MainNavigation />,
    loader: checkAuthLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: "property", element: <UserPropertyPage /> },
      {
        path: "property",
        element: <PropertyNavbar />,
        children: [
          { path: "basic-info", element: <BasicInfoForm /> },
          { path: "property-detail", element: <PropertyDetailForm /> },
          { path: "general-info", element: <GeneralInfoForm /> },
          { path: "location-info", element: <LocationInfoForm /> },
          { path: "edit", element: <EditPropertyForm /> },
        ],
      },
    ],
  },
  { path: "auth/signup", element: <SignUpForm /> },
  { path: "auth/signin", element: <SignInForm /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
