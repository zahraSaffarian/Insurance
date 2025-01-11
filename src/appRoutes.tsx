import { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import _ from "lodash";
import Loading from "./components/common/Loading";

const Login = lazy(() => import("./pages/Login"));
const ChooseInsurance = lazy(() => import("./pages/ChooseInsurance"));
const SalesInsurance = lazy(() => import("./pages/SalesInsurance"));

const userData = _.get(localStorage, "userData");

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: userData ? (
      <Navigate to="/choose-insurance" />
    ) : (
      <Navigate to="/login" />
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading/>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/choose-insurance",
    element: (
      <Suspense fallback={<Loading/>}>
        <ChooseInsurance />
      </Suspense>
    ),
  },
  {
    path: "/sales-insurance",
    element: (
      <Suspense fallback={<Loading/>}>
        <SalesInsurance />
      </Suspense>
    ),
  },
];

export default appRoutes;
