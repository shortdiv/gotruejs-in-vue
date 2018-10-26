const attemptLogin = ({ commit }, credentials) => {
  let didTimeout = true;
  return new Promise((resolve, reject) => {
    commit("TOGGLE_LOAD");
    const timeout1 = setTimeout(() => {
      commit("LOGIN");
      commit("TOGGLE_LOAD", credentials);
      didTimeout = false;
      resolve();
    }, 1000);
    setTimeout(() => {
      if (didTimeout) {
        reject();
      }
      didTimeout = false;
      clearTimeout(timeout1);
    }, 3000);
  });
};

export default {
  attemptLogin
};
