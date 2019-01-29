<template>
    <div class="entryInfo">
        <h3>Create New Account</h3>
        <label for="uname">Email</label>
        <input type="email" v-model="email" placeholder="Email" name="uname" required>
        <label for="pword">Password</label>
        <input type="password" v-model="password" placeholder="Password" name="pword" required>
        <button @click="signUp" class="waves-effect waves-light btn">Sign Up</button>
        <p>Go back to <router-link to="/login">login.</router-link></p>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'signUp',
        data() {
            return{
                email: '',
                password: ''
            };
        },
        methods: {
            signUp: function(){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    function(user) {
                        alert('Your account has been created!');
                    },
                    function(err){
                        alert(`Oops. ${err.message}`);
                    }
                )
            }
        }
    }
</script>

<style>
</style>