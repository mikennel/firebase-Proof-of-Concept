<template>
    <div class="listRow" :data-title="title" :data-date="dueDate" :data-categories="categories">
        <div class="listSection toDo-checkbox">
            <a class="btn-floating btn-medium waves-effect waves-light"><i @click="deleteListItem"  :data-id="id" class="material-icons">check</i></a>
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
            <div class="arrow showHideArrow down"></div>
        </div>
        <div class="listSection toDo-description squished">
            <p>{{description}}</p>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "listItem",
  props: {
      title: String,
      dueDate: String,
      categories: String,
      description: String,
      id: String
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
      },
      deleteListItem: function(e){
          var idToDelete = $(e.target).attr("data-id");
          var userId = firebase.auth().currentUser.uid;
          
          console.debug(idToDelete);
      }
  }
};
</script>

<style>
  .toDo-description, .showHideDesc, .toDo-description > p{
    grid-column: 2/5;
    background-color: rgb(231, 231, 231);
  }

  .showHideDesc{
      cursor: pointer;
  }

  .showHideArrow {
      margin: 6px auto;
      border-left: 2px solid black;
      border-bottom: 2px solid black;
  }

  .toDo-checkbox{
      margin: auto;
  }
  
  .toDo-checkbox > a, .toDo-checkbox > a > i{
      display: grid;
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