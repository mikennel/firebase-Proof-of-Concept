<template>
    <div class="listRow">
    <div class="listSection toDo-checkbox">
        <input type="checkbox">
    </div>
    <div class="listSection toDo-title">
        <p>a title</p>
    </div>
    <div class="listSection toDo-dueDate">
        <p>1/31/2019</p>
    </div>
    <div class="listSection toDo-categories">
        <p>category a, category b, category c</p>
    </div>
    </div>
</template>

<script>
export default {
  name: "listItem",
  props: {
  }
};
</script>