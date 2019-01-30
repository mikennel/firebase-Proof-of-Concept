<template>
  <div class="entryInfo">
    <toDoList welcome="Welcome" title="Your To Do List" />
    <button @click="logout" class="waves-effect waves-light btn">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";
import toDoList from "@/components/toDoList.vue";

export default {
  name: "home",
  components: {
    toDoList
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace("login");
      });
    }
  }
};
</script>
