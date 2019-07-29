<template>
  <div>
    <h1>这是Member组件！！</h1>
    <h2>这里是插槽⬇️</h2>
    <slot :lover="ssbb"></slot>
    <fuck></fuck>
  </div>
</template>

<script>
  export default {
    name: 'membercontainer',
    data(){
      return{
        count: 0,
        ssbb: 111
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
