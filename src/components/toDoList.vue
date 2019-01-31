<template>
  <div>
    <h1>{{ welcome }}</h1>
    <h2>{{ title }}</h2>
    <createListItem />
    <div id="listContainer">
      <div id="listHeaders">
        <div class="spacer headerBlock"></div>
        <div @click="sortByTitle" class="headerBlock listSection">
          <p>Title</p><div id="titleArrow" class="arrow sortArrow unsorted"></div>
        </div>
        <div @click="sortByDate" class="headerBlock listSection">
          <p>Due Date</p><div id="dateArrow" class="arrow sortArrow unsorted"></div>
        </div>
        <div class="headerBlock listSection">
          <p>Categories</p>
        </div>
      </div>
      <div id="listItems">
        <listItem title="B Title" dueDate="2/03/2020" categories="category a, category b, category c" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        <listItem title="A Title" dueDate="3/01/2019" categories="category b, category c" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        <listItem title="C Title" dueDate="2/10/2019" categories="category a" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      </div>
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
          return $(a).attr('data-date').localeCompare($(b).attr('data-date'));
        }).appendTo($wrapper);
      } else {
        //point arrow the right direction
        arrow.removeClass("unsorted").removeClass("down");
        arrow.addClass("up");
        //sort the items
        $wrapper.find('.listRow').sort(function(b,a){
          return $(a).attr('data-date').localeCompare($(b).attr('data-date'));
        }).appendTo($wrapper);
      }

      // var $wrapper = $('#kbaLinkScroller');
      // makeSortActive($(this), $(".sortArticlesBtn"));
      // $wrapper.find('.articleListEntry').sort(function(a,b){
      //   return $(b).attr('data-articlePopular') - $(a).attr('data-articlePopular');
      // })
      // .appendTo($wrapper);
    },
    filterCategory: function(){
      // core of the function
      var listItems = $(".listRow");
      for (i in listItems){
        if (~$(listItems[i]).attr("data-categories").indexOf("category a")){
          $(listItems[i]).addClass("squished");
        } else {
          $(listItems[i]).removeClass("squished");
        }
      }
    }
  }
};

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
</style>
