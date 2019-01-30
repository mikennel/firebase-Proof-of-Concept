<template>
    <div class="entryInfo">
        <h3>Sign In</h3>
        <label for="uname">Username</label>
        <input type="email" v-model="email" placeholder="Username" name="uname" required /><br>
        <label for="pword">Password</label>
        <input type="password" v-model="password" placeholder="Password" name="pword" required>
        <button @click="login" class="waves-effect waves-light btn">Log In</button>
        <p>Don"t have an account?  <router-link to="/sign-up">Create one</router-link></p>
    </div>
</template>

<script>
    import firebase from "firebase";

    export default {
        name: "Login",
        data() {
            return{
                email: "",
                password: ""
            };
        },
        methods: {
            login: function(){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$router.replace("home");
                    },
                    (err) => {
                        alert(`Oops.  ${err.message}`);
                    }
                )
                // this.$router.replace("home");
            }
        }
    }
</script>

<style>
</style>