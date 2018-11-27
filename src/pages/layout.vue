<template>
  <div>
    <headerBar/>
    <div>
      <personalData/>
      <personalData2/>

    </div>
  </div>
</template>


<script>
  import headerBar from '../pages/HeaderBar'
  import personalData from '../pages/personalData'
  import personalData2 from '../pages/personalData2'

  export default {
        name: "layout",
      components: { headerBar, personalData, personalData2},

    }
</script>

<style scoped>

</style>
