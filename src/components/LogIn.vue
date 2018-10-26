<template>
  <form @submit.prevent="submit()">
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
    <button @click="submit">Login</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LogIn",
  data() {
    return {
      credentials: {
        username: null,
        password: null
      }
    };
  },
  methods: {
    ...mapActions("auth", ["attemptLogin"]),
    submit() {
      this.attemptLogin(this.credentials)
        .then(() => {
          console.log("hello");
          this.transferToDashboard();
        })
        .catch(err => {
          console.log(err);
        });
    },
    transferToDashboard() {
      this.$router.push(this.$route.query.redirect || "/");
    }
  }
};
</script>

<style scoped>
</style>
