<template>
  <div class="app-container">
    <mt-header fixed title="KZY的练习项目"></mt-header>


    <router-view></router-view>


    <div class="nav">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="home" @click.native="navclick('home')">
          <div slot="icon" class="iconfont">&#xe604;</div>
          主页
        </mt-tab-item>
        <mt-tab-item id="member" @click.native="navclick('member')">
          <div slot="icon" class="iconfont">&#xe604;</div>
          用户
        </mt-tab-item>
        <mt-tab-item id="shopcar" @click.native="navclick('shopcar')">
          <mt-badge size="small" type="error" class="badge">30</mt-badge>
          <div slot="icon" class="iconfont">&#xe604;</div>
          购物车
        </mt-tab-item>
        <mt-tab-item id="search" @click.native="navclick('search')">
          <div slot="icon" class="iconfont">&#xe604;</div>
          搜索
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
      selected:'home'
    }
  },
  methods:{
    navclick(a) {
      // console.log(this.$route.path)
      this.$router.push({
        path: a
      })
      // console.log(this.$route.path)
    }
  },
  mounted () {
    // this.selected = this.$route.path
    let str=this.$route.path;
    console.log(str.substr(1));
    this.selected = str.substr(1);
    console.log(str.indexOf('h'))
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
  .badge{
    position: absolute;
    top: 7px;
    right: 110px;
  }
  .mint-tab-item.is-selected{
    background-color:transparent;
  }
</style>
