import { auth } from "./state";

const init = () => {
  //
};

const attemptLogin = ({ commit }, credentials) => {
  return new Promise((resolve, reject) => {
    auth
      .login(credentials.email, credentials.password)
      .then(response => {
        resolve("success");
        alert("Success! Response: " + JSON.stringify({ response }));
        commit("LOGIN");
        commit("TOGGLE_LOAD");
      })
      .catch(error => {
        reject(error.json);
      });
  });
};

const attemptConfirmation = ({ commit }, token) => {
  return new Promise((resolve, reject) => {
    auth
      .confirm(token)
      .then(response => {
        resolve("yay");
        console.log(
          "Confirmation email sent",
          JSON.stringify({
            response
          })
        );
        commit("yay");
      })
      .catch(error => {
        reject(error);
        console.log(error);
      });
  });
};

const attemptSignUp = ({ commit }, credentials) => {
  return new Promise((resolve, reject) => {
    auth
      .signup(credentials.email, credentials.password)
      .then(response => {
        resolve("yay");
        console.log("Confirmation email sent", response);
        commit("LOGIN");
        commit("TOGGLE_LOAD");
      })
      .catch(error => {
        reject(error);
        console.log("It's an error", error);
      });
  });
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
