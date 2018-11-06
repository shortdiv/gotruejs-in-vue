<template>
  <div class="hello">
    <h1>This is a dashboard</h1>
    <button @click="logout">Log me out</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    ...mapActions("auth", ["attemptLogout"]),
    logout() {
      this.attemptLogout()
        .then(() => {
          this.addNotification({
            title: "Logged Out",
            text: "You have been successfully logged out.",
            type: "success"
          });
          console.log("Logged Out!");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
