<template>
  <div class="home">
    <navHeader></navHeader>
    <div class="container">
      <div class="row">
        <div class="col-sm">{{displayName}}</div>
     <div>
          <input v-model="newName" />
          <button @click="changeName">Submit</button>
        </div>
        <div class="col-sm">One of three columns</div>
        <div class="col-sm">One of three columns</div>
      </div>
    </div>
    <navFooter></navFooter>
  </div>
</template>

<script>
import firebase from "firebase";
import store from "../store/store";
import navHeader from "../components/Header";
import navFooter from "../components/Footer";
import firebaseModule from "../firebase";
import { userInfo } from 'os';

// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      displayName: firebase.auth().currentUser.displayName,
      newName:""
    };
  },
  components: {
    navHeader,
    navFooter
  },
  methods: {
    logout: function() {
      firebaseModule.firebaseLogout(this);
    },
    changeName: function() {
      var self = this;
      let firebaseActon = firebase.auth().currentUser

      firebaseActon.updateProfile({
        displayName:self.newName
      }).then(function(){
          self.displayName = firebaseActon.displayName
      }).then(function(){

      console.log(self.displayName,'display name')
      
      })

          
    }
  },
  mounted() {
    console.log(firebase.auth().currentUser)
  },
  beforeCreate() {
    var self = this;


    if (localStorage.getItem("AppStore") !== null) {
      store.store = JSON.parse(localStorage.getItem("AppStore"));
      console.log("setting", store.store);
    }
  }
};
</script>
