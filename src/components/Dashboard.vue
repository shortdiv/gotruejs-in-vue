<template>
  <div>
    <div class="nav-bar">
      <div class="bar-column chopsticks-logo">
        <div class="chopsticks-logo--img">
          <img src="../assets/hands-invert.svg" alt>
        </div>
      </div>
      <div class="bar-column">
        <span class="logo--title">Chopsticks</span>
      </div>
      <div class="bar-column">
        <button @click="logout">
          <span>Log me out</span>
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
    <div class="wrapper">
      <div class="column">
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/kitchen.jpg"
            data-src="https://images.unsplash.com/photo-1529940316268-e245e031bcd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="duck duck pig"
          >
          <div class="restaurant--text">
            <h3>Duck Duck Pig</h3>
            <span>Reserve a table</span>
          </div>
        </div>
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/kitchen2.jpg"
            data-src="https://images.unsplash.com/photo-1470256699805-a29e1b58598a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="japanese restaurant by Alva Pratt @alvapratt"
          >
          <div class="restaurant--text">
            <h3>Kabuki</h3>
            <span>Reserve a table</span>
          </div>
        </div>
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/longimg.jpg"
            data-src="https://images.unsplash.com/photo-1513315615612-80a194c0b5e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            alt="Chris Fuller @chrisfullr"
          >
          <div class="restaurant--text">
            <h3>Lucky Panda</h3>
            <span>Reserve a table</span>
          </div>
        </div>
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/korean.jpg"
            data-src="https://images.unsplash.com/photo-1531263539449-56fdf29dfc4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt="Korean food by Eiliv-Sonas Aceron @eilivaceron"
          >
          <div class="restaurant--text">
            <h3>Sima</h3>
            <span>Reserve a table</span>
          </div>
        </div>
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/sushichef.jpg"
            data-src="https://images.unsplash.com/photo-1522701025355-3b334358d451?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1906&q=80"
            alt="Wyron A @wyron"
          >
          <div class="restaurant--text">
            <h3>Yuzu</h3>
            <span>Reserve a table</span>
          </div>
        </div>
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/kitchen.jpg"
            data-src="https://images.unsplash.com/photo-1504940892017-d23b9053d5d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1544&q=80"
            alt="Geraldine Lewa @geraldine_lewa"
          >
          <div class="restaurant--text">
            <h3>Dragon's Lair</h3>
            <span>Reserve a table</span>
          </div>
        </div>
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/shopwindow.jpg"
            data-src="https://images.unsplash.com/photo-1482859602406-7659b00979fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Chinese restaurant window by Khachik Simonian @khachiksimonian"
          >
          <div class="restaurant--text">
            <h3>Lucky Panda</h3>
            <span>Reserve a table</span>
          </div>
        </div>
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/noodlebar.jpg"
            data-src="https://images.unsplash.com/photo-1489529243611-223e46f88e67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=912&q=80"
            alt="Clem Onojeghuo @clemono2"
          >
          <div class="restaurant--text">
            <h3>Ken's Noodle Bar</h3>
            <span>Reserve a table</span>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/noodlebar.jpg"
            data-src="https://images.unsplash.com/photo-1489529243611-223e46f88e67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=912&q=80"
            alt="Clem Onojeghuo @clemono2"
          >
          <div class="restaurant--text">
            <h3>Ken's Noodle Bar</h3>
            <span>Reserve a table</span>
          </div>
        </div>
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/shopwindow.jpg"
            data-src="https://images.unsplash.com/photo-1482859602406-7659b00979fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Chinese restaurant window by Khachik Simonian @khachiksimonian"
          >
          <div class="restaurant--text">
            <h3>Ken's Noodle Bar</h3>
            <span>Reserve a table</span>
          </div>
        </div>
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/korean.jpg"
            data-src="https://images.unsplash.com/photo-1531263539449-56fdf29dfc4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            style="width:100%"
            alt="Korean food by Eiliv-Sonas Aceron @eilivaceron"
          >
          <div class="restaurant--text">
            <h3>Ken's Noodle Bar</h3>
            <span>Reserve a table</span>
          </div>
        </div>
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/interior.jpg"
            data-src="https://images.unsplash.com/photo-1504940892017-d23b9053d5d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1544&q=80"
            style="width:100%"
            alt="Geraldine Lewa @geraldine_lewa"
          >
          <div class="restaurant--text">
            <h3>Ken's Noodle Bar</h3>
            <span>Reserve a table</span>
          </div>
        </div>
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/cheftalk.jpg"
            data-src="https://images.unsplash.com/photo-1519215509744-39a1bfa5a79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            style="width: 100%"
            alt="Joshua K. Jackson @joshua"
          >
          <div class="restaurant--text">
            <h3>Ken's Noodle Bar</h3>
            <span>Reserve a table</span>
          </div>
        </div>
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/sushichef.jpg"
            data-src="https://images.unsplash.com/photo-1522701025355-3b334358d451?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1906&q=80"
            style="width:100%"
            alt="Wyron A @wyron"
          >
          <div class="restaurant--text">
            <h3>Ken's Noodle Bar</h3>
            <span>Reserve a table</span>
          </div>
        </div>
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/outdoors.jpg"
            data-src="https://images.unsplash.com/photo-1515092744438-961dffe687bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1933&q=80"
            style="width: 100%"
            alt
          >
          <div class="restaurant--text">
            <h3>Ken's Noodle Bar</h3>
            <span>Reserve a table</span>
          </div>
        </div>
        <div class="column--item">
          <img
            class="lazy"
            src="../assets/running.jpg"
            data-src="https://images.unsplash.com/photo-1542292558-91a27a9ea06d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"
            style="width:100%"
            alt="Chinese restaurant window by Khachik Simonian @khachiksimonian"
          >
          <div class="restaurant--text">
            <h3>Ken's Noodle Bar</h3>
            <span>Reserve a table</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Dashboard",
  props: {
    msg: String
  },
  methods: {
    ...mapActions("auth", ["attemptLogout", "addNotification"]),
    logout() {
      this.attemptLogout()
        .then(() => {
          this.handleSuccessfulLogout();
        })
        .catch(err => {
          this.handleUnsuccessfulLogout(err);
        });
    },
    handleSuccessfulLogout() {
      this.transferToLoginScreen();
      this.addNotification({
        title: "Logged Out",
        text: "You have been successfully logged out.",
        type: "success"
      });
    },
    handleUnsuccessfulLogout(err) {
      this.addNotification({
        title: "Oops! Looks like something is wrong!",
        text: err,
        type: "fail"
      });
    },
    transferToLoginScreen() {
      this.$router.push(this.$route.query.redirect || "/login");
    }
  },
  mounted() {
    const lazyLoadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });
    lazyLoadImages.forEach(img => {
      imageObserver.observe(img);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-bar {
  background: #0f1b20;
  height: 3.6rem;
  padding: 0;
  position: fixed;
  width: 100%;
  z-index: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  button {
    position: absolute;
    right: 0;
    top: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 1.5em;
    cursor: pointer;

    span {
      padding-right: 13px;
      font-size: 0.75em;
      position: relative;
      vertical-align: middle;
    }

    i {
      vertical-align: middle;
    }
  }
}

.logo--title {
  display: block;
  font-family: "Paytone One", sans-serif;
  color: #e2873e;
  font-size: 1.5em;
  margin-top: 10px;
  margin-left: 50px;
}

.chopsticks-logo {
  top: 5px;
  left: 10px;
  &--img {
    height: 50px;
    position: relative;
    width: 50px;
    margin-top: 0.35em;
    margin-left: 1em;

    img {
      position: absolute;
      width: 100%;
    }
  }
}

.wrapper {
  display: grid;
  /* Display as a Grid */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
}

.column {
  &--item {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover {
      width: 100%;
      img {
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }
    }

    img {
      width: 100%;
      transition: all 0.5s ease-in-out;
    }
  }
}

.restaurant--text {
  min-width: 150px;
  position: absolute;
  padding: 0.5em;
  margin: 0;
  top: 10px;
  background-color: white;
  width: 50%;
  h3 {
    padding: 0;
  }
  span {
    text-decoration: underline;
    &:after {
      content: "\21E8";
      position: absolute;
      bottom: 6px;
      text-decoration: none;
      padding-left: 0.25em;
    }
  }
}

button {
  position: absolute;
}
</style>
