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
}
.entryInfo{
    margin: auto;
    width: 50%;
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
</style>
