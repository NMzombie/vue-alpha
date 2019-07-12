<template>
<div>
  <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>

  <ul class="body-nav">
    <router-link to="/home/newslist"><li><i class="iconfont">&#xe633;</i><div>新闻资讯</div></li></router-link>
    <router-link to="/home/newslist"><li><i class="iconfont">&#xe633;</i><div>图片分享</div></li></router-link>
    <router-link to="/home/newslist"><li><i class="iconfont">&#xe633;</i><div>商品购买</div></li></router-link>
    <router-link to="/home/newslist"><li><i class="iconfont">&#xe633;</i><div>留言反馈</div></li></router-link>
    <router-link to="/home/newslist"><li><i class="iconfont">&#xe633;</i><div>视频专区</div></li></router-link>
    <router-link to="/home/newslist"><li><i class="iconfont">&#xe633;</i><div>联系我们</div></li></router-link>
  </ul>
  <h1>HOME</h1>
</div>
</template>

<script>
  export default {
    name: 'homecontainer',
    data(){
     return{
     urldata:{
       articleType:0
     }
     }
    },
    created(){
      this.getLunbotu()
      console.log(22)
    },
    methods:{
      getLunbotu(){
        this.$axios({
          method:'post',
          url:this.GLOBAL.baseURL +'/doc/api/common/newsArticle/findArticleInformation',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data:`data=${JSON.stringify(this.urldata)}`
          //   this.qs.stringify({    //这里是发送给后台的数据
          //   articleType:0
          // })
        }).then((response) => {          //这里使用了ES6的语法
          console.log(response.data.data)       //请求成功返回的数据
        }).catch((error) => {
          console.log(error)       //请求失败返回的数据
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 1265285 */
    src: url('//at.alicdn.com/t/font_1265285_3nzw6s08aus.eot');
    src: url('//at.alicdn.com/t/font_1265285_3nzw6s08aus.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1265285_3nzw6s08aus.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1265285_3nzw6s08aus.woff') format('woff'),
    url('//at.alicdn.com/t/font_1265285_3nzw6s08aus.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1265285_3nzw6s08aus.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:30px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
  a,a:hover,a:active,a:visited,a:link,a:focus{
    outline:none;
    background: none;
    text-decoration: none;
    color: black;
  }
.mint-swipe{
  height: 200px;
   .mint-swipe-item{
     &:nth-child(1){
     background-color: #ff3068;
   }
     &:nth-child(2){
       background-color: #ff653e;
     }
     &:nth-child(3){
       background-color: #3ab6ff;
     }
   }
}
.body-nav{
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  height: 250px;
  a{
      display: flex;
      justify-content: center;
      flex-basis: 33%;
      list-style: none;
    li{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      i{
        margin-bottom: 5px;
      }
    }


  }
  }
</style>
