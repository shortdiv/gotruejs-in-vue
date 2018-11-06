import { auth } from "./state";

const init = () => {
  //
};

const attemptLogin = ({ commit }, credentials) => {
  return auth
    .login(credentials.email, credentials.password)
    .then(response => {
      alert("Success! Response: " + JSON.stringify({ response }));
      commit("LOGIN");
      commit("TOGGLE_LOAD");
    })
    .catch(error => alert("Failed :( " + JSON.stringify(error)));
};

const attemptConfirmation = ({ commit }, token) => {
  return auth
    .confirm(token)
    .then(response => {
      console.log(
        "Confirmation email sent",
        JSON.stringify({
          response
        })
      );
      commit("yay");
    })
    .catch(function(e) {
      console.log(e);
    });
};

const attemptSignUp = ({ commit }, credentials) => {
  return auth
    .signup(credentials.email, credentials.password)
    .then(response => {
      console.log("Confirmation email sent", response);
      commit("LOGIN");
      commit("TOGGLE_LOAD");
    })
    .catch(error => console.log("It's an error", error));
};

const attemptLogout = ({ commit }) => {
  const user = auth.currentUser();
  return user
    .logout()
    .then(response => {
      console.log("user has logged out", response);
      commit("LOGOUT");
    })
    .catch(error => console.log("Could not log out", error));
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
  attemptConfirmation,
  attemptLogin,
  attemptLogout,
  addNotification,
  removeNotification
};
