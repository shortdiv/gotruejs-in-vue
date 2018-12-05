<template>
  <div class="wrapper">
    <div class="login-screen">
      <div class="chopsticks-logo">
        <img src="../assets/hands.svg" alt>
        <span>Chopsticks</span>
      </div>
      <template v-if="notifications.length > 0">
        <transition-group name="notification-list" tag="div" class="notifications" appear>
          <notification
            appear
            v-for="(notification, idx) in notifications"
            :key="idx"
            :notification="notification"
          ></notification>
        </transition-group>
      </template>
      <form @submit.prevent="login()" v-if="isLogin">
        <h2>Log In:</h2>
        <ul>
          <li>
            <label>
              <span>Email:</span>
              <input type="text" v-model="loginCreds.email">
            </label>
          </li>
          <li>
            <label>
              <span>Password:</span>
              <input type="password" ref="passwordField" v-model="loginCreds.password">
              <button class="eye-icon" @click.prevent="toggleIcon">
                <i :class="eyeIcon"></i>
              </button>
            </label>
          </li>
        </ul>
        <button type="submit" class="submit-button">Login</button>
        <p class="sign-up-link">
          New to chopsticks?
          <span @click="toggleSignup">Create an account.</span>
        </p>
      </form>
      <form @submit.prevent="signup()" v-else>
        <h2>Sign Up:</h2>
        <ul>
          <li>
            <label for>
              Email:
              <input type="text" v-model="signupCreds.email">
            </label>
          </li>
          <li>
            <label for>
              <span>Password:</span>
              <input type="password" ref="passwordField" v-model="signupCreds.password">
              <button class="eye-icon" @click.prevent="toggleIcon">
                <i :class="eyeIcon"></i>
              </button>
            </label>
          </li>
        </ul>
        <button type="submit" class="submit-button">Sign Me Up!</button>
        <p class="sign-up-link">
          Already have a log in?
          <span @click="toggleSignup">Return to log in.</span>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Notification from "./Notification";

export default {
  name: "Login",
  components: {
    Notification
  },
  data() {
    return {
      auth: null,
      isLogin: true,
      showPassword: false,
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
    ...mapState("auth", ["notifications", "currentUser"]),
    eyeIcon() {
      return {
        far: true,
        "fa-eye": this.showPassword,
        "fa-eye-slash": !this.showPassword
      };
    }
  },
  methods: {
    ...mapActions("auth", ["attemptLogin", "attemptSignUp", "addNotification"]),
    toggleSignup() {
      this.isLogin = !this.isLogin;
    },
    toggleIcon() {
      this.showPassword = !this.showPassword;
      this.$refs.passwordField.type = this.showPassword ? "text" : "password";
    },
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
        .catch(err => this.handleUnsuccessfulLogin(err));
    },
    login() {
      let token = decodeURIComponent(window.location.search)
        .substring(1)
        .split("confirmation_token=")[1];
      this.attemptLogin({ token, ...this.loginCreds })
        .then(() => {
          this.handleSuccessfulLogin();
        })
        .catch(err => {
          this.handleUnsuccessfulLogin(err);
        });
    },
    handleSuccessfulLogin() {
      this.transferToDashboard();
      this.addNotification({
        title: "Log In",
        text: "You have successfully logged in.",
        type: "success"
      });
    },
    handleUnsuccessfulLogin(err) {
      this.addNotification({
        title: "Oops! Looks like something is wrong!",
        text: err,
        type: "fail"
      });
    },
    transferToDashboard() {
      this.$router.push(this.$route.query.redirect || "/");
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Paytone+One");

.wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background: url(../assets/backdrop.jpg) center center fixed;
  background-size: cover;
}

.login-screen {
  margin: 0 auto;
  padding: 40px;
  height: 400px;
  width: calc(100vw - 180px);
  max-width: 600px;
  min-width: 200px;
  background-color: white;
  h2 {
    margin-bottom: 13px;
  }
}

.chopsticks-logo {
  text-align: center;
  img {
    width: 20%;
  }
  span {
    display: block;
    font-family: "Paytone One", sans-serif;
    color: #e2873e;
  }
}

input {
  border: 2px solid #e9ebeb;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  color: #0e1e25;
  display: block;
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  line-height: 24px;
  margin: 0;
  margin-bottom: 0.5em;
  padding: 6px 14px;
  width: 100%;
  &:focus {
    border-color: #e2873e;
    outline: none;
  }
}
.submit-button {
  margin-top: 1em;
  font-size: 1.25em;
  background-color: #0f1b20;
  border: none;
  border-radius: 5px;
  color: #fff;
  outline: none;
  padding: 10px 60px;
  width: 100%;
  cursor: pointer;
}

.eye-icon {
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #d3d3d8;
  position: absolute;
  top: 50%;
  right: 10px;
  &:focus {
    outline: none;
  }
  i {
    font-size: 1.5em;
  }
}

.sign-up-link {
  text-align: center;
  span {
    color: #e2873e;
    font-weight: 900;
    cursor: pointer;
  }
}
</style>
