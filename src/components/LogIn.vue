<template>
  <div>
    <template v-if="notifications.length > 0">
    <transition-group name="notification-list" tag="div" class="notifications" appear>
        <notification
            appear
            v-for="(notification, idx) in notifications"
            :key="idx"
            :notification="notification">
        </notification>
    </transition-group>
    </template>
    <h1>Log In:</h1>
    <form @submit.prevent="login()">
      <label for="">
        Username:
        <input
          type="text"
          v-model="loginCreds.email"
        >
      </label>
      <label for="">
        Password:
        <input
          type="password"
          v-model="loginCreds.password"
        >
      </label>
      <button type="submit">Login</button>
    </form>
    <h1>Sign Up:</h1>
    <form @submit.prevent="signup()">
      <label for="">
        Email:
        <input type="text"
        v-model="signupCreds.email"
        >
      </label>
      <label for="">
        Password:
        <input type="text"
        v-model="signupCreds.password">
      </label>
      <button type="submit">Sign Me Up!</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Notification from "./Notification";

export default {
  name: "LogIn",
  components: {
    Notification
  },
  data() {
    return {
      auth: null,
      loginCreds: {
        email: null,
        password: null
      },
      signupCreds: {
        email: null,
        password: null
      }
    };
  },
  computed: {
    ...mapState("auth", ["notifications"])
  },
  methods: {
    ...mapActions("auth", ["attemptLogin", "attemptSignUp", "addNotification"]),
    signup() {
      this.attemptSignUp(this.signupCreds)
        .then(() => {
          this.addNotification({
            title: "Sign Up",
            text:
              "You have successfully signed up. Check your email to confirm your account.",
            type: "success"
          });
          console.log("a confirmation email has been sent to you!");
        })
        .catch(err => console.log(err));
    },
    login() {
      this.attemptLogin(this.loginCreds)
        .then(() => {
          //grab token//
          const token = window.location.search
            .substring(1)
            .split("confirmation_token=")[1];
          if (token) {
            const decodedToken = decodeURIComponent(token);
            this.attemptConfirmation(decodedToken).then(() => {
              this.handleSuccessfulLogin();
            });
          }
          this.handleSuccessfulLogin();
        })
        .catch(err => console.log(err));
    },
    handleSuccessfulLogin() {
      this.transferToDashboard();
      this.addNotification({
        title: "Log In",
        text: "You have successfully logged in.",
        type: "success"
      });
    },
    transferToDashboard() {
      this.$router.push(this.$route.query.redirect || "/");
    }
  }
};
</script>
