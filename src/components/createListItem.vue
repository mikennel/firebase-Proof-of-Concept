<template>
    <div @click="openListModal" id="createListItemBtn">
        <a> <span class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">add</i></span> Add Something To Do</a>
    </div>
</template>

<script>
    export default {
        name: "createListItem",
        methods: {
            openListModal: function(){
                console.debug("clicked!");
            }
        }
    };
</script>

<style scope>
    #createListItemBtn {
        height: auto;
        width: fit-content;
        margin: 0 auto 1em auto;
        cursor: pointer;
    }
</style>