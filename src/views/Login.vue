<template>
    <div class="login">
        <h3>Sign In</h3>
        <label for="uname">Username</label><br>
        <input type="text" placeholder="Username" name="uname" required><br>
        <label for="pword">Password</label><br>
        <input type="password" placeholder="Password" name="pword" required><br>
        <button @click="login">Connection</button><br>
        <p>Don't have an account?  <router-link to="/sign-up">Create one</router-link></p>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return{};
        },
        methods: {
            login: function(){
                this.$router.replace('home');
            }
        }
    }
</script>

<style scoped>
    .login{
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
    p {
        margin-top: 40px;
        font-size: 13px;
    }
    p a {
        text-decoration: underline;
        cursor: pointer;
    }
</style>