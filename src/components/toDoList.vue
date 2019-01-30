<template>
  <div>
    <h1>{{ welcome }}</h1>
    <h2>{{ title }}</h2>
    <div id="listContainer">
      <div id="listHeaders">
        <div class="spacer headerBlock"></div>
        <div class="headerBlock listSection">
          <p>Title</p>
        </div>
        <div class="headerBlock listSection">
          <p>Due Date</p>
        </div>
        <div class="headerBlock listSection">
          <p>Categories</p>
        </div>
      </div>
      <listItem />
    </div>
  </div>
</template>

<script>
import listItem from "@/components/listItem.vue"

export default {
  name: "toDoList",
  components: {
    listItem
  },
  props: {
    title: String,
    welcome: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #listContainer{
    display: grid;
    grid-template-columns: 100%;
    text-align: left;
  }

  #listHeaders, .listRow{
    display: grid;
    grid-template-columns: 10% 30% 30% 30%;
  }

  #listHeaders{
    background-color: rgb(80, 80, 80);
    color: white;
  }

 .headerBlock > p{
    font-size: 1.5em;
    font-weight: bold;
    margin: .5em 0;
  }
</style>
