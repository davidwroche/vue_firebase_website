import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let app = '';

const config = {
  apiKey: "AIzaSyALmEZm282yVzAj5sDrfDSYqzBngzYi7f4",
  authDomain: "haggle-ed012.firebaseapp.com",
  databaseURL: "https://haggle-ed012.firebaseio.com",
  projectId: "haggle-ed012",
  storageBucket: "haggle-ed012.appspot.com",
  messagingSenderId: "134305249546",
  appId: "1:134305249546:web:b6c179f2452c0c19"
};


firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
