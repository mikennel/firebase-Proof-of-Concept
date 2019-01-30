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
        <div @click="showHideDescription" class="listSection showHideDesc">
            <div class="showHideArrow down"></div>
        </div>
        <div class="listSection toDo-description squished">
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
  },
  methods: {
      showHideDescription: function(e){
        //   var clickedSection = e.target;
          var arrow = $($(e.target).children(".showHideArrow"));
          var descBlock = $($(e.target).siblings(".toDo-description"));
          if (arrow.hasClass("down")){
              arrow.removeClass("down");
              arrow.addClass("up");
              descBlock.removeClass("squished");
          } else {
              arrow.removeClass("up");
              arrow.addClass("down");
              descBlock.addClass("squished");
          }
      }
  }
};
</script>

<style>
  .toDo-description, .showHideDesc, .toDo-description > p{
    grid-column: 2/5;
    background-color: rgb(231, 231, 231);
  }

  .showHideArrow {
      height: 7px;
      width: 7px;
      margin: 6px auto;
      border-left: 2px solid black;
      border-bottom: 2px solid black;
      transition: .5s;
  }

  .down {
      transform: rotate(-45deg);
  }

  .up {
      transform: rotate(135deg);
  }

  .toDo-description > p {
      margin-top: 0;
      padding: .5em 1em 0 1em;
      overflow: truncate;
  }

    .toDo-description{
        max-height: 200px;
    }

    .squished {
        max-height: 0;
    }

    .toDo-description, .squished {
        transition: .5s;
        overflow: hidden;
    }
</style>