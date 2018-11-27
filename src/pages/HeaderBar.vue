<template>
<!--top bar-->
<el-menu class="HeaderBar">
<img class="logo" src="../assets/images/bank_logo.png">
</el-menu>
</template>

<script>export default {
  name: 'headerBar'
}</script>

<style scoped>
.HeaderBar{
  position:fixed;
  top: 0;
  height: 5rem;
}
.appbar-search-field {
  color: #FFF;
  margin-bottom: 0;
}
.appbar-search-field.focus-state {
  color: #FFF;
}
.appbar-search-field .mu-text-field-hint {
  color: rgba(255, 255, 255, 0.54);
}
.appbar-search-field .mu-text-field-input {
  color: #FFF;
}
.logo{
  width:24rem;
  height:5rem;
  position:absolute;
  left:0;
  top:0;
}
</style>
