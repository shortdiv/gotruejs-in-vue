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
          v-model="credentials.username"
        >
      </label>
      <label for="">
        Password:
        <input
          type="password"
          v-model="credentials.password"
        >
      </label>
      <button @click="login">Login</button>
    </form>
    <h1>Sign Up:</h1>
    <form @submit.prevent="signup()">
      <label for="">
        Email:
        <input type="text"
        >
      </label>
      <label for="">
        Password:
        <input type="text">
      </label>
      <button @click="signup">Sign Me Up!</button>
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
      credentials: {
        username: null,
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
      this.attemptSignUp(this.credentials).then(() => {
        this.addNotification({
          title: "Sign Up",
          text:
            "You have successfully signed up. Check your email to confirm your account.",
          type: "success"
        });
        console.log("a confirmation email has been sent to you!");
      });
    },
    login() {
      this.attemptLogin(this.credentials)
        .then(() => {
          this.addNotification({
            title: "Log In",
            text: "You have successfully logged in.",
            type: "success"
          });
          //this.transferToDashboard();
        })
        .catch(err => console.log(err));
    },
    transferToDashboard() {
      this.$router.push(this.$route.query.redirect || "/");
    }
  }
};
</script>
