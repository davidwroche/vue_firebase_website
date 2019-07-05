<template>
  <div class="login">
     <navHeader></navHeader>

<form class="form-signin" v-bind:style="{'padding-top':'100px'}">
  <h1 class="h3 mb-3 font-weight-normal"></h1>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required v-model="email" autofocus v-bind:style="{'margin-bottom':'10px'}">
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="password" v-bind:style="{'margin-bottom':'10px'}">
  <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
  <button class="btn btn-lg btn-primary btn-block" @click="login" v-bind:style="{'background-color':'#563D7A'}">Sign in</button>
  <p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
</form>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import store from "../store/store";
  import navHeader from "../components/Header"
import navFooter from "../components/Footer"

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
      components:{
      navHeader,
      navFooter
  },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            store.addUserAction(user)
            this.$router.replace('home')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>