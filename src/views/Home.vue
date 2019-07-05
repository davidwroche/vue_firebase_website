<template>
  <div class="home">
         <navHeader></navHeader>
    <div class="container">
  <div class="row">
    <div class="col-sm">
    {{storeState.user.user.email}}
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
    <!-- <button @click="logout">Logout</button> -->
  </div>
</template>

<script>
import firebase from "firebase";
import store from "../store/store";
  import navHeader from "../components/Header"
import navFooter from "../components/Footer"

// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      storeState: store.store
    };
  },
      components:{
      navHeader,
      navFooter
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
