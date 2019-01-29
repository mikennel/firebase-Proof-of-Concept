<template>
  <div class="entryInfo">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="logout" class="waves-effect waves-light btn">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login');
      });
    }
  }
};
</script>
