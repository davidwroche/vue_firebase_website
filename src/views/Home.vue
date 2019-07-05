<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>{{storeState.user}}</div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";
import store from "../store/store";

// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      storeState: store.store
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  },
  beforeCreate() {
    if (localStorage.getItem("AppStore") !== null) {
      store.store = JSON.parse(localStorage.getItem("AppStore"));
      console.log("setting", store.store);
    }

  }
};
</script>
