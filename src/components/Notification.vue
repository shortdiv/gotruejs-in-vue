<template>
  <div :class="{notification: true, loading: timer}">
    <div>
      <p v-text="notification.text"></p>
    </div>
    <button
      type="button"
      class="notification--remove"
      @click="removeNotification()"
    >
      <i class="fa fa-times" />
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Notification",
  props: {
    notification: {
      type: Object
    }
  },
  data() {
    return {
      timer: null
    };
  },
  methods: {
    ...mapActions("auth", ["removeNotification"]),
    triggerClose() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.removeNotification(this.notification);
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.triggerClose();
    }, 3000);
  }
};
</script>

<style scoped lang="scss">
.notification {
  position: fixed;
  z-index: 5;
  top: 10px;
  right: 10px;
  width: 179px;
  padding: 20px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border-radius: 3px;
  background: white;
  color: #64b587;
  &:after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 10%;
    background-color: green;
    -webkit-transform: translate(-100%);
    transform: translate(-100%);
  }
  &--remove {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 15px;
    &:hover {
      cursor: pointer;
    }
  }
}
.loading {
  &.notification:after {
    animation: loading 3s forwards;
  }
}
.fa {
  position: relative;
  width: 100%;
  text-align: center;
}
.fa-check {
  color: #64b587;
}
.fa-exclamation {
  color: #e74e50;
}
button {
  border: none;
}
@keyframes loading {
  100% {
    transform: translate(0);
  }
}
</style>
