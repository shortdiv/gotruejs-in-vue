import Dashboard from "../components/Dashboard";
import Login from "../components/LogIn";

export default [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/404",
    name: "404",
    component: 404,
    props: true
  }
];
