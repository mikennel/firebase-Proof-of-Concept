import firebase from 'firebase';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let app = '';

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBI8i77wNk29SoIBujv0goC9FKq5cY6wnc",
  authDomain: "fir-proof-of-concept-a6fc1.firebaseapp.com",
  databaseURL: "https://fir-proof-of-concept-a6fc1.firebaseio.com",
  projectId: "fir-proof-of-concept-a6fc1",
  storageBucket: "fir-proof-of-concept-a6fc1.appspot.com",
  messagingSenderId: "768522867112"
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
