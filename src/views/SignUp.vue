<template>
  <div class="sign-up">
    <navHeader></navHeader>

    <form class="form-sign-up" v-bind:style="{'padding-top':'100px'}">
      <h1 class="h3 mb-3 font-weight-normal"></h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        v-model="email"
        autofocus
        v-bind:style="{'margin-bottom':'10px'}"
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="password"
        v-bind:style="{'margin-bottom':'10px'}"
      />
      <p>
        Already have an account ? You can
        <router-link to="/login">sign in</router-link>
      </p>
      <button
        class="btn btn-lg btn-primary btn-block"
        @click="signUp"
        v-bind:style="{'background-color':'#563D7A'}"
      >Sign up</button>
    </form>
    <navFooter></navFooter>
  </div>
</template>

 <script>
import firebase from "firebase";
import navHeader from "../components/Header";
import navFooter from "../components/Footer";

export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    navHeader,
    navFooter
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("home");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

 <style scoped>
/* "scoped" attribute limit the CSS to this component only */
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

.form-sign-up {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-sign-up .checkbox {
  font-weight: 400;
}
.form-sign-up .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-sign-up .form-control:focus {
  z-index: 2;
}
.form-sign-up input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-sign-up input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>