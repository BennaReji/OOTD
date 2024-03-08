import {createBrowserRouter} from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Homepage from './pages/Homepage';
import UserPage from "./pages/Profile/UserPage";
import CreatePost from "./pages/CreatePost";
import NotificationPage from "./pages/NotificationPage";
import Settings from "./pages/SettingsPages/Settings";
import Login from "./pages/Login";
import AboutUs from "./pages/SettingsPages/AboutUs";
import SystemsGuide from "./pages/SettingsPages/SystemsGuide";
import UserGuide from "./pages/SettingsPages/UserGuide";
import TermsOfService from "./pages/SettingsPages/TermsOfService";
import DataPrivacy from "./pages/SettingsPages/DataPrivacy";

//import { useAuth } from "../auth";

export const LOGIN = "/";
export const SIGNIN = "/SignIn";
export const SIGNUP = "/SignUp";
export const USERPAGE = "/UserPage";
export const PROFILEPAGE = "/UserPage/:id";
export const CREATEPOST = "/CreatePost";
export const NOTIFICATIONPAGE = "/NotificationPage";
export const SETTINGS = "/Settings";
export const HOMEPAGE = "/Homepage";
export const ABOUTUS = "/AboutUs";
export const USERS = "/Users";
export const SYSTEMSGUIDE = "/SystemsGuide";
export const USERGUIDE = "/UserGuide";
export const TERMSOFSERVICE = "/TermsOfService";
export const DATAPRIVACY = "/DataPrivacy"

export const router = createBrowserRouter([
    {path: HOMEPAGE, element: <Homepage />},
    {path: SIGNIN, element: <SignIn />},
    {path: SIGNUP, element: <SignUp />},
    {path: PROFILEPAGE, element: <UserPage />},
    {path: CREATEPOST, element: <CreatePost />},
    {path: NOTIFICATIONPAGE, element: <NotificationPage />},
    {path: SETTINGS, element: <Settings />},
    {path: LOGIN, element: <Login />},
    {path: ABOUTUS, element: <AboutUs />},
    {path: SYSTEMSGUIDE, element: <SystemsGuide />},
    {path: USERGUIDE, element: <UserGuide />},
    {path: TERMSOFSERVICE, element: <TermsOfService />},
    {path: DATAPRIVACY, element: <DataPrivacy />},





]);
