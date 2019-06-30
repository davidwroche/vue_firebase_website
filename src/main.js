import Vue from 'vue';
import firebase from 'firebase';
import bootstrap from 'bootstrap';
import App from './App.vue';
import router from './router';
import config from "../config";


Vue.config.productionTip = false;

let app = '';

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      bootstrap,
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
