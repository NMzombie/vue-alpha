<template>
  <div>
    <h1>Member</h1>
    <fuck></fuck>
  </div>
</template>

<script>
  export default {
    name: 'membercontainer',
    data(){
      return{
        count: 0
      }
    },
    components:{
      fuck:{
        template:'<button>你点了我</button>'
      }
    }
  }
</script>

<style scoped>

</style>
