<template>
    <div class="signUp">
        <h3>Create New Account</h3>
        <label for="uname">Email</label><br>
        <input type="email" placeholder="Email" name="uname" required><br>
        <label for="pword">Password</label><br>
        <input type="password" placeholder="Password" name="pword" required><br>
        <button>Sign Up</button><br>
        <span>Go back to <router-link to="/login">login.</router-link></span>
    </div>
</template>

<script>
    export default {
        name: 'signUp',
        data() {
            return{};
        },
        methods: {}
    }
</script>

<style scoped>
    .signUp{
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }
    span{
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>