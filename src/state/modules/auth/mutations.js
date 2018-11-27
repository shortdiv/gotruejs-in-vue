const SET_CURRENT_USER = (state, value) => {
  state.currentUser = value;
  saveState("auth.currentUser", value);
};

const TOGGLE_LOAD = state => {
  state.loading = !state.loading;
};

const ADD_NOTIFICATION = (state, notification) => {
  state.notifications.push(notification);
};

const YAY = () => {
  console.log("yay");
};

const REMOVE_NOTIFICATION = (state, notification) => {
  state.notifications.splice(state.notifications.indexOf(notification), 1);
};

export default {
  YAY,
  SET_CURRENT_USER,
  TOGGLE_LOAD,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION
};

function saveState(key, state) {
  window.localStorage.setItem(key, JSON.stringify(state));
}
