import { auth } from "./state";

const init = () => {
  //
};

const attemptLogin = ({ commit }, credentials) => {
  auth
    .login(credentials.email, credentials.password)
    .then(response => {
      alert("Success! Response: " + JSON.stringify({ response }));
      commit("LOGIN");
      commit("TOGGLE_LOAD");
    })
    .catch(error => alert("Failed :( " + JSON.stringify(error)));
};

const attemptSignUp = ({ commit }, credentials) => {
  console.log(credentials);
  auth
    .signup(credentials.email, credentials.password)
    .then(response => {
      console.log("Confirmation email sent", response);
      commit("LOGIN");
      commit("TOGGLE_LOAD");
    })
    .catch(error => console.log("It's an error", error));
};

const addNotification = ({ commit }, notification) => {
  commit("ADD_NOTIFICATION", notification);
};

const removeNotification = ({ commit }, notification) => {
  commit("REMOVE_NOTIFICATION", notification);
};

export default {
  init,
  attemptSignUp,
  attemptLogin,
  addNotification,
  removeNotification
};
