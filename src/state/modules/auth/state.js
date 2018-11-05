import GoTrue from "gotrue-js";

export const auth = new GoTrue({
  APIUrl: "https://clever-williams-469dd0.netlify.com/.netlify/identity",
  audience: "",
  setCookie: false
});

const state = {
  loading: false,
  loggedIn: false,
  token: null,
  notifications: []
};

export default state;
