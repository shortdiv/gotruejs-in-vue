import store from "../state/store";
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
    component: Login,
    meta: {
      beforeResolve(to, from, next) {
        if (store.getters["auth/loggedIn"]) {
          next({ name: "dashboard" });
        } else {
          next();
        }
      }
    }
  },
  {
    path: "/404",
    name: "404",
    component: 404,
    props: true
  }
];
