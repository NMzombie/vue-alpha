<template>
  <div class="app-container">
    <mt-header fixed title="KZY的练习项目"></mt-header>

    <transition>
    <router-view></router-view>
    </transition>

    <div class="nav">
      <mt-tabbar v-model="selected">
        <!--<router-link to="/home" class="mint-tab-item is-selected">-->
          <!--<div class="mint-tab-item-icon"><div slot="icon" class="iconfont">&#xe604;</div></div>-->
          <!--<div class="mint-tab-item-label">主页</div>-->
        <!--</router-link>-->
        <mt-tab-item id="home" @click.native="navclick('/home')">
          <div slot="icon" class="iconfont">&#xe604;</div>
          主页
        </mt-tab-item>
        <mt-tab-item id="member" @click.native="navclick('/member')">
          <div slot="icon" class="iconfont">&#xe604;</div>
          用户
        </mt-tab-item>
        <mt-tab-item id="shopcar" @click.native="navclick('/shopcar')">
          <div slot="icon" class="iconfont" style="position: relative;">&#xe604;<mt-badge size="small" type="error" class="badge"><span>30</span></mt-badge></div>
          购物车
        </mt-tab-item>
        <mt-tab-item id="search" @click.native="navclick('/search')">
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
      this.$router.push({
        path: a
      })
    }
  },
  mounted () {
    let str=this.$route.path;
    if (str.indexOf('home')!==-1) this.selected = 'home'
    if (str.indexOf('member')!==-1) this.selected = 'member'
    if (str.indexOf('shopcar')!==-1) this.selected = 'shopcar'
    if (str.indexOf('search')!==-1) this.selected = 'search'
    // console.log(str.substr(1));
    //   this.selected = str.substr(1);
    // console.log(str.indexOf('h'))
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
    font-size:24px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}

  .app-container{
    overflow-x:hidden;
  }
.app-container {
  padding-top: 40px;
}
  .badge{
    display: inline-block;
    position: absolute;
    top: -2px;
    right: -17px;
    line-height: 1;
  }
  .badge span{
    -webkit-text-stroke-width: 0;
    font-family:PingFangSC-Regular,sans-serif;
  }
  .mint-tab-item.is-selected{
    background-color:transparent;
  }
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
  }
  .v-enter-active,v-leave-active{
    transition: all 0.5s ease ;
  }
</style>
