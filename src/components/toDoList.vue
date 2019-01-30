<template>
  <div>
    <h1>{{ welcome }}</h1>
    <h2>{{ title }}</h2>
    
  </div>
</template>

<script>
export default {
  name: "toDoList",
  props: {
    title: String,
    welcome: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
