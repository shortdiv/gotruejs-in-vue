import Vue from "vue";
import Router from "vue-router";
import store from "../state/store";
import LogIn from "../components/LogIn";
import HelloWorld from "../components/HelloWorld.vue";

Vue.use(Router);

const checkAuth = (to, from, next) => {
  const loggedIn = store.state.auth.loggedIn;
  const token = store.state.auth.token;
  if ((!loggedIn && token) || (!loggedIn && !token)) {
    next({ path: "/login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
      beforeEnter: checkAuth,
      meta: { requiresAuth: true }
    },
    {
      path: "/login",
      name: "LogIn",
      component: LogIn
    }
  ]
});

// fe fi fo fum
// fefomo.io
