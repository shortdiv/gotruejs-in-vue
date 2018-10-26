const LOGIN = state => {
  state.loggedIn = true;
  state.token = true;
};

const TOGGLE_LOAD = state => {
  state.loading = !state.loading;
};

export default {
  LOGIN,
  TOGGLE_LOAD
};
