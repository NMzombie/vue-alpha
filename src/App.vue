<template>
  <div class="app-container">
    <mt-header fixed title="KZY的练习项目"></mt-header>
    <h1>呜啦啦啦</h1>





    <div class="nav">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="外卖">
          <!--<img slot="icon" src="assets/100x100.png" alt="">-->
          <div slot="icon" class="iconfont">&#xe604;</div>
          外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
          <img slot="icon" src="assets/100x100.png" alt="">
          订单
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="assets/100x100.png" alt="">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="assets/100x100.png" alt="">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      selected:''
    }
  }
}
</script>

<style scoped>
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
    font-size:24px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.app-container {
  padding-top: 40px;
}
</style>
