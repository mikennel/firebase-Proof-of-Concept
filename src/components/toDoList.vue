<template>
  <div>
    <h1>{{ welcome }}</h1>
    <h2>{{ title }}</h2>
    <createListItem />
    <div id="listContainer">
      <div id="filterContainer">
        <div>
          <button @click="filterList" class="waves-effect waves-light btn red" data-filter="none">None</button>
        </div>
        <div>
          <button @click="filterList" class="waves-effect waves-light btn" data-filter="Category A">Category A</button>
        </div>
        <div>
          <button @click="filterList" class="waves-effect waves-light btn" data-filter="Category B">Category B</button>
        </div>
        <div>
          <button @click="filterList" class="waves-effect waves-light btn" data-filter="Category C">Category C</button>
        </div>
        <div>
          <button @click="filterList" class="waves-effect waves-light btn" data-filter="Category D">Category D</button>
        </div>
      </div>
      <div id="listHeaders">
        <div class="spacer headerBlock"></div>
        <div @click="sortByTitle" class="headerBlock listSection sortButton">
          <p>Title</p><div id="titleArrow" class="arrow sortArrow unsorted"></div>
        </div>
        <div @click="sortByDate" class="headerBlock listSection sortButton">
          <p>Due Date</p><div id="dateArrow" class="arrow sortArrow unsorted"></div>
        </div>
        <div class="headerBlock listSection">
          <p>Categories</p>
        </div>
      </div>
      <div id="listItems">
        <listItem title="Using the Template" dueDate="2019-1-31" categories="Category A, Category B" description="This list item uses the vue template.  Unfortunately, I attacked this app from the wrong angle and am using Firebase as the end-all be-all source of the list.  I should have used the vue list rendering functionality to store data locally and only commited the list to firebase with a 'save' button after the user deleted/added entries.  Each delete/addition commits directly to firebase and causes a page refresh.  This might be ok for an app coded with pure html/css/js, but with vue I couldn't dynamically call the templates the way I wanted to so I went a different (and ultimately wrong) route.  Lesson learned!  This template is hard coded in the vue componenet and has all the same functionality except deletion (since it's not an actual list item)." id="01234567890" />
      </div>
    </div>
  </div>
</template>

<script src="/js/helper.js"></script>

<script>
import firebase from "firebase";
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
  },
  methods: {
    sortByTitle: function(){
      var $wrapper = $('#listItems');
      var arrow = $("#titleArrow");
      // hide the other sort arrow
      $("#dateArrow").removeClass("up").removeClass("down").addClass("unsorted");
      if (arrow.hasClass("unsorted") || arrow.hasClass("up")){
        //point arrow the right direction
        arrow.removeClass("unsorted").removeClass("up");
        arrow.addClass("down");
        //sort the items
        $wrapper.find('.listRow').sort(function(a,b){
          return $(a).attr('data-title').localeCompare($(b).attr('data-title'));
        }).appendTo($wrapper);
      } else {
        //point arrow the right direction
        arrow.removeClass("unsorted").removeClass("down");
        arrow.addClass("up");
        //sort the items
        $wrapper.find('.listRow').sort(function(b,a){
          return $(a).attr('data-title').localeCompare($(b).attr('data-title'));
        }).appendTo($wrapper);
      }
    },
    sortByDate: function(){
      var $wrapper = $('#listItems');
      var arrow = $("#dateArrow");
      // hide the other sort arrow
      $("#titleArrow").removeClass("up").removeClass("down").addClass("unsorted");
      if (arrow.hasClass("unsorted") || arrow.hasClass("up")){
        //point arrow the right direction
        arrow.removeClass("unsorted").removeClass("up");
        arrow.addClass("down");
        //sort the items
        $wrapper.find('.listRow').sort(function(a,b){
          return new Date($(a).attr('data-date')).getTime() - new Date($(b).attr('data-date')).getTime();
          }).appendTo($wrapper);
      } else {
        //point arrow the right direction
        arrow.removeClass("unsorted").removeClass("down");
        arrow.addClass("up");
        //sort the items
        $wrapper.find('.listRow').sort(function(b,a){
          return new Date($(a).attr('data-date')).getTime() - new Date($(b).attr('data-date')).getTime();
          }).appendTo($wrapper);
      }

      // var $wrapper = $('#kbaLinkScroller');
      // makeSortActive($(this), $(".sortArticlesBtn"));
      // $wrapper.find('.articleListEntry').sort(function(a,b){
      //   return $(b).attr('data-articlePopular') - $(a).attr('data-articlePopular');
      // })
      // .appendTo($wrapper);
    },
    filterList: function(e){
      // core of the function
      var listItems = $(".listRow");
      var targetFilter = $(e.target).attr("data-filter");
      for (var i = 0; i < listItems.length; ++i){
        if (~$(listItems[i]).attr("data-categories").indexOf(targetFilter) || targetFilter == "none"){
          $(listItems[i]).removeClass("squished");
        } else {
          $(listItems[i]).addClass("squished");
        }
      }
    },
    addListItems: function(){
      // I'm sure there's a better way to do this using the vues and components
      var userId = firebase.auth().currentUser.uid;
      return firebase.database().ref(`/users/${userId}/toDoList/`).once('value').then(function(snapshot) {
        var listEntries = snapshot.val();
        for (var i in listEntries){
          var id = i;
          var title = listEntries[i].title;
          var date = listEntries[i].dueDate;
          var cat = listEntries[i].categories;
          var desc = listEntries[i].description
          $("#listItems").append(`
          <div class="listRow" data-title="${title}" data-date="${date}" data-categories="${cat}">
            <div class="listSection toDo-checkbox">
                <a class="btn-floating btn-medium waves-effect waves-light"><i onClick="deleteListItem(this)"  data-id="${id}"class="material-icons">check</i></a>
            </div>
            <div class="listSection toDo-title">
                <p>${title}</p>
            </div>
            <div class="listSection toDo-dueDate">
                <p>${date}</p>
            </div>
            <div class="listSection toDo-categories">
                <p>${cat}</p>
            </div>
            <div onClick="showHideDescription(this)" class="listSection showHideDesc">
                <div class="arrow showHideArrow down"></div>
            </div>
            <div class="listSection toDo-description squished">
                <p>${desc}</p>
            </div>
        </div>`);
        }
      });
    }
  },
  created(){
    this.addListItems();
  }
};

function showHideDescription(e){
      console.debug("hello");
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

</script>

<style>
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
    margin: .5em .5em .5em 0;
  }

  .headerBlock > *{
    display: inline-block;
  }

  .arrow{
      height: 7px;
      width: 7px;
      transition: .5s;
  }

  .sortButton{
    cursor: pointer;
  }

  .sortArrow{
    margin: 6px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
  }

  .unsorted{
    border-left: 2px solid transparent;
    border-bottom: 2px solid transparent;
  }

  .down {
      transform: rotate(-45deg);
  }

  .up {
      transform: rotate(135deg);
  }

  #filterContainer{
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    margin-bottom: 1em;
  }

  #filterContainer > div > button {
    width: 90%;
    font-size: .7em;
    padding-left: .2em;
    padding-right: .2em;
  }
</style>
