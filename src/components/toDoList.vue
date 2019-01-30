<template>
  <div>
    <h1>{{ welcome }}</h1>
    <h2>{{ title }}</h2>
    <createListItem />
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
      <listItem title="Title" dueDate="1/31/2019" categories="category a, category b, category c" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <listItem title="Title" dueDate="2/10/2019" categories="category b, category c" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
    </div>
  </div>
</template>

<script>
import createListItem from "@/components/createListItem.vue";
import listItem from "@/components/listItem.vue";

export default {
  name: "toDoList",
  components: {
    listItem,
    createListItem
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
