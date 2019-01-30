<template>
  <div id="mainContainer">
    <img alt="ToDo Logo" src="@/assets/logo.png">
    <router-view />
  </div>
</template>

<style>
#mainContainer {
  text-align: center;
  color: #2c3e50;
  min-width: 480px;
}
.entryInfo{
    margin: auto;
    width: 70%;
    transition: .25s;
}
button {
    margin-top: 20px;
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

@media only screen and (max-width: 1280px){
  .entryInfo{
    width: 80%;
  }
}

@media only screen and (max-width: 812px){
  .entryInfo{
    width: 90%;
  }
}
</style>
