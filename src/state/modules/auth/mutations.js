const LOGIN = state => {
  state.loggedIn = true;
  state.token = true;
};

const TOGGLE_LOAD = state => {
  state.loading = !state.loading;
};

const ADD_NOTIFICATION = (state, notification) => {
  state.notifications.push(notification);
};

const REMOVE_NOTIFICATION = (state, notification) => {
  state.notifications.splice(state.notifications.indexOf(notification), 1);
};

export default {
  LOGIN,
  TOGGLE_LOAD,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION
};
