<template>
    <div>
        <div @click="openListModal" id="createListItemBtn">
            <a> <span class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">add</i></span> Add Something To Do</a>
        </div>
        <div id="addToDoModal-starter">
            <div id="addToDoModal-darkBack" class="hidden">
                <div id="addToDoModal-container">
                    <div class="modalBlock header">
                        <h3>Create a To Do Item</h3>
                        <a @click="closeListModal" id="closeModalBtn"><span class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">close</i></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "createListItem",
        methods: {
            openListModal: function(){
                $("#addToDoModal-darkBack").removeClass("hidden");
            },
            closeListModal: function(){
                $("#addToDoModal-darkBack").addClass("hidden");
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

    #addToDoModal-darkBack{
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 100;
        padding: 5vh 5vw;
        background-color: rgba(0, 0, 0, 0.5);
        transition: .5s;
    }

    #addToDoModal-container{
        background-color: white;
        width: 100%;
        height: 100%;
        margin: auto;
    }

    .modalBlock{
        min-height: 3em;
    }

    .modalBlock.header {
        display: grid;
        grid-template-columns: 85% 15%;
    }

    #closeModalBtn{
        margin: 1em 1em 0 0;
    }

    .hidden{
        margin-top: 100vh;
        background: transparent;
        transition: .5s;
    }
</style>