<template>
    <header>
     <nav class="navbar navbar-expand-lg navbar-dark" style="background-color:#563D7B">
        <div class="container d-flex justify-content-between">
          <a class="navbar-brand" href="#">~Name~</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <router-link to="/pricing" class="nav-link">Pricing</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
            <span class="navbar-text">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-if="auth == null">
                <router-link to="/login" class="nav-link">Login</router-link>
                </li>
                <li class="nav-item" v-if="auth == null">
                <router-link to="/signup" class="nav-link">Register</router-link>
                </li>
                <li class="nav-item" v-if="auth !== null">
                <a class="nav-link" @click="logout">Logout</a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
import firebase from "firebase";
import store from "../store/store";
import navHeader from "../components/Header"

export default {
  name: "Header",
  data() {
    return {
      auth: firebase.auth().currentUser,
      storeState: store.store
    };
  },
  components:{
      navHeader
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
            this.auth = null
          //this.$router.replace("landing");
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


<style>

</style>
