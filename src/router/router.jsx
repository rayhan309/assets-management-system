import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import JoinHR from "../Pages/Home/JoinHR/JoinHR";
import Error404 from "../Pages/Error404/Error404 ";
import Forbidden from "../Pages/Forbidden/Forbidden";
import PrivitePage from "../Context/PrivitePage";
import DashboardLayout from "../Layouts/DashboardLayout";
import Profile from "../Pages/Dashboard/Profile/Profile";
import AddAsset from "../Pages/Dashboard/AddAsset/AddAsset";
import MyAssets from "../Pages/Dashboard/myAssets/MyAssets";
import AssetsList from "../Pages/Dashboard/AssetsList/AssetsList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "abpu-us",
        Component: AboutUs,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "join-hr",
        Component: JoinHR,
      },
      {
        path: "forbidden",
        Component: Forbidden,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivitePage>
        <DashboardLayout></DashboardLayout>
      </PrivitePage>
    ),
    children: [
      {
        path: 'profile',
        Component: Profile
      },
      {
        path: 'add-assets',
        Component: AddAsset
      },
      {
        path: 'my-assets',
        Component: MyAssets
      },
      {
        path: 'assets-list',
        Component: AssetsList
      }
    ],
  },
]);
