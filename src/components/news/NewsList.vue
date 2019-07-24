<template>
<div>
  <h1>新闻列表页面</h1>
  <h1>this is{{$route.query.id}}</h1>
  <h2>{{$store.state.sb}}</h2>
  <ul class="news-container" >
    <li v-for="item in a" :key="item">
      <img alt="" src="https://file.wchoosemall.com/platform/manager/pic/20190710/16658765867330016.png">
      <div class="news-content">
      <div class="title">啦啦啦</div>
      <div class="time"><span>发表时间:2019-7-12</span><span>点击：0</span></div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
  export default {
    name: 'NewsList',
    data(){
      return{
         a:[1,2,3,4,5]
      }
    },
    computed:{
      myId(){
        return this.$route.query.id;
      }
    }
  }
</script>

<style lang="scss" scoped>
.news-container{
  padding-left: 0;
  li{
    list-style: none;
    width: 320px;
    height: 50px;
    border-bottom: 1px solid #606060;
    margin: 20px auto 0;
    padding-left: 0;
    display: flex;
    .news-content{
      width: 295px;
      display: flex;
      flex-direction: column;
      height: 35px;
      margin-left: 10px;
      .time{
        color: #a2a2a2;
        font-size: 5px;
        display: flex;
        justify-content: space-between;
      }
    }
    img{
      height: 35px;
      width: 35px;
    }
  }
}
</style>
