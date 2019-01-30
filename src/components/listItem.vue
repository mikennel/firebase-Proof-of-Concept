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
    </div>
</template>

<script>
export default {
  name: "listItem",
  props: {
      title: String,
      dueDate: String,
      categories: String
  }
};
</script>