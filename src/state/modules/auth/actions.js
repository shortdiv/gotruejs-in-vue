import { auth } from "./state";

const init = ({ dispatch }) => {
  dispatch("validate");
};

const validate = ({ commit, state }) => {
  if (!state.currentUser) return Promise.resolve(null);
  const user = auth.currentUser();
  commit("SET_CURRENT_USER", user);
  return user;
};

const attemptLogin = ({ commit, dispatch }, credentials) => {
  return new Promise((resolve, reject) => {
    auth
      .login(credentials.email, credentials.password)
      .then(response => {
        commit("SET_CURRENT_USER", response);
        resolve("success");
      })
      .catch(error => {
        if (
          error.json.error_description.toLowerCase() === "email not confirmed"
        ) {
          dispatch("attemptConfirmation", credentials);
        } else {
          reject(error.json);
        }
      });
  });
};

const attemptConfirmation = ({ commit, dispatch }, credentials) => {
  return new Promise((resolve, reject) => {
    auth
      .confirm(credentials.token)
      .then(response => {
        dispatch("attemptLogin", credentials);
        resolve("yay");
        console.log(
          "Confirmation email sent",
          JSON.stringify({
            response
          })
        );
        commit("YAY");
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
      commit("SET_CURRENT_USER", null);
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
  validate,
  attemptSignUp,
  attemptConfirmation,
  attemptLogin,
  attemptLogout,
  addNotification,
  removeNotification
};
