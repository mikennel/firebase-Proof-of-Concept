<template>
    <div class="listRow">
        <div class="listSection toDo-checkbox">
            <input type="checkbox">
        </div>
        <div class="listSection toDo-title">
            <p>{{title}}</p>
        </div>
        <div class="listSection toDo-dueDate">
            <p>{{dueDate}}</p>
        </div>
        <div class="listSection toDo-categories">
            <p>{{categories}}</p>
        </div>
        <div class="listSection showHideDesc">
            <div class="showHideArrow"></div>
        </div>
        <div class="listSection toDo-description">
            <p>{{description}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "listItem",
  props: {
      title: String,
      dueDate: String,
      categories: String,
      description: String
  }
};
</script>

<style scoped>
  .toDo-description, .showHideDesc{
    grid-column: 2/5;
    background-color: rgb(231, 231, 231);
  }

  .showHideArrow {
      height: 7px;
      width: 7px;
      margin: 6px auto;
      border-left: 2px solid black;
      border-bottom: 2px solid black;
      transform: rotate(-45deg);
      transition: .5s;
  }

  .toDo-description > p {
      margin-top: 0;
      padding: .5em 1em 0 1em;
      height: auto;

  }
</style>