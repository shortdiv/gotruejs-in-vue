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
    dispatch("attemptConfirmation", credentials).then(() => {
      auth
        .login(credentials.email, credentials.password)
        .then(response => {
          resolve(response);
          commit("SET_CURRENT_USER", response);
        })
        .catch(error => {
          reject(error.json);
        });
    });
  });
};

const attemptConfirmation = ({ commit, dispatch }, credentials) => {
  return new Promise((resolve, reject) => {
    if (!credentials.token) {
      resolve();
    }
    auth
      .confirm(credentials.token)
      .then(response => {
        credentials.token = null;
        dispatch("attemptLogin", credentials);
        console.log(
          "Confirmation email sent",
          JSON.stringify({
            response
          })
        );
        commit("YAY");
        resolve(response);
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
        console.log("Confirmation email sent", response);
        commit("TOGGLE_LOAD");
        resolve(response);
      })
      .catch(error => {
        reject(error);
        console.log("It's an error", error);
      });
  });
};

const attemptLogout = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const user = auth.currentUser();
    user
      .logout()
      .then(response => {
        console.log(response);
        resolve(response);
        commit("SET_CURRENT_USER", null);
      })
      .catch(error => {
        reject(error);
        console.log("Could not log out", error);
      });
  });
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
