<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-white-dark">
        <h1 class="h2-class">信息认证</h1>
        <p class="p-class">请填写及确认以下信息</p>
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="20"><div class="grid-content bg-white-dark">
        <img style="align-self: center;" src="../assets/images/small_info.png">
      </div></el-col>
    </el-row>
  </div>

</template>
  <script>export default {
    name: 'personalData'
  }</script>

<style>
  .bg-white-dark {
    background: rgba(218, 69, 27, 0);
  }

  .grid-content {
    border-radius: 1rem;
    min-height: 2rem;
  }

  .h2-class {
    font-size: 4rem;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .p-class {
    font-size: 2rem;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align:center;
  }

</style>

