<template>
    <div>
        <div @click="openListModal" id="createListItemBtn">
            <a> <span class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">add</i></span> Add Something To Do</a>
        </div>
        <div id="addToDoModal-starter">
            <div id="addToDoModal-darkBack" class="hidden">
                <div id="addToDoModal-container">
                    <div class="modalBlock header">
                        <h4>Create a To Do Item</h4>
                        <a id="closeModalBtn"><span @click="closeListModal" class="btn-floating btn-medium waves-effect waves-light"><i class="material-icons">close</i></span></a>
                    </div>
                    <form @submit.prevent="submitToDo" class="modalBlock form">
                        <div class="input-field">
                            <input id="add-Title" type="text" required>
                            <label for="add-Title">Title</label>
                        </div>
                        <div class="input-field">
                            <input type="date" class="datepicker" id="add-Date" required>
                        </div>
                        <div class="input-field categoryGroups">
                            <p class="areaTitle">Categories</p>
                            <p><input type="checkbox" class="add-cat" id="catA" value="Category A"/><label for="catA">Category A</label></p>
                            <p><input type="checkbox" class="add-cat" id="catB" value="Category B" /><label for="catB">Category B</label></p>
                            <p><input type="checkbox" class="add-cat" id="catC" value="Category C" /><label for="catC">Category C</label></p>
                            <p><input type="checkbox" class="add-cat" id="catD" value="Category D" /><label for="catD">Category D</label></p>
                        </div>
                        <div class="input-field">
                            <textarea id="add-Desc" class="materialize-textarea" required></textarea>
                            <label for="add-Desc">Description</label>
                        </div>
                        <button type="submit" class="waves-effect waves-light btn">Create</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from "firebase";

    export default {
        name: "createListItem",
        methods: {
            openListModal: function(){
                $("#addToDoModal-darkBack").removeClass("hidden");
            },
            closeListModal: function(){
                $("#addToDoModal-darkBack").addClass("hidden");
            },
            submitToDo: function(){
                var userId = firebase.auth().currentUser["uid"];
                var title = $("#add-Title").val();
                var dueDate = $("#add-Date").val();
                var description = $("#add-Desc").val();
                var checkedCats = $(".add-cat:checked");
                var categories = ""
                for (var x = 0; x < checkedCats.length; x++){
                    if (x > 0){
                        categories += ", ";
                    }
                    categories += $(checkedCats[x]).attr("value");
                }
                firebase.database().ref(`/users/${userId}/toDoList/`).push({
                    title: title,
                    dueDate: dueDate,
                    categories: categories,
                    description: description
                }, function(error){
                    if (error){
                        alert(`Something went wrong: ${error}`);
                    } else {
                        location.reload();
                    }
                });

            }
        }
    };

    // $('.datepicker').pickadate({
    //     selectMonths: true, // Creates a dropdown to control month
    //     selectYears: 6 // Creates a dropdown of 6 years to control year
    // });

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
        min-width: 430px;
        height: 100%;
        margin: auto;
        display: grid;
        grid-template-rows: 15% 85%;
    }

    .modalBlock.form{
        padding: 0 4em 0 4em;
    }

    .modalBlock.header {
        display: grid;
        grid-template-columns: 85% 15%;
    }

    .modalBlock.form{
        overflow-y: scroll;
    }

    #closeModalBtn{
        margin: 1em 1em 0 0;
    }

    .categoryGroups{
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .categoryGroups > p {
        margin: .5em 0;
        font-size: 1.5em;
    }

    .areaTitle{
        grid-column: 1/3;
    }
    
    /* materialize checkboxes not working so reverting to normal */
    [type="checkbox"]:not(:checked), [type="checkbox"]:checked {
        opacity: 100;
        position: relative;
        pointer-events: initial;
    }

    .hidden{
        margin-top: 100vh;
        background: transparent;
        transition: .5s;
    }

    @media only screen and (max-width: 812px){
        #addToDoModal-darkBack{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        padding: 5vh 5vw;
        background-color: rgba(0, 0, 0, 0.5);
        transition: .5s;
        }
        .hidden{
            margin-top: 200%;
        }
        #addToDoModal-container{
            min-width: 0;
            
        }
    }
</style>