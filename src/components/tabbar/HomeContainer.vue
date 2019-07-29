<template>
<div>
  <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>
  <ul class="body-nav">
    <router-link v-for="item in RouterData" :key="item.title" :to="{path:item.path,query:item.query}"><li><i class="iconfont">&#xe633;</i><div>{{item.title}}</div></li></router-link>
  </ul>
  <h2 v-for="item in newslist.slice(0,3)" :key="item.id">{{item.createTime | dataFormat}}</h2>
  <fuck v-bind:parentmsg="count" @func="show"></fuck>
  <input type="text" v-model="demo">
  <h1>HOME</h1>
  <ul class="sss">
    <li :class="{'active':actives === 1}" @click="active(1)">11</li>
    <li :class="{'active':actives === 2}" @click="active(2)">22</li>
    <li :class="{'active':actives === 3}" @click="active(3)">33</li>
  </ul>
  <memberContainer><template slot-scope="lalala"><h1>插插插插{{lalala}}</h1></template></memberContainer>
  <!-- <memberContainer><template v-slot:chacao="lalala"><h1>插插插插{{lalala}}</h1></template></memberContainer> -->
  <router-view></router-view>
</div>
</template>


<script>
  import MemberContainer from '@/components/tabbar/MemberContainer'

  export default {
    name: 'homecontainer',
    data(){
     return{
     urldata:{
       articleType:0
     },
       count: 0,
       dataMsgFromson:null,
       newslist:[],
       lala:'',
       url:{id:222,sb:this.count},
       actives:1,
       demo:'',
       RouterData:[
         {
           path:'/home/newslist',
           query:{id:222,sb:this.count},
           title:'新闻资讯'
         },
         {
           path:'/home/newslist',
           query:{id:222,sb:this.count},
           title:'图片分享'
         },
         {
           path:'/home/newslist',
           query:{id:222,sb:this.count},
           title:'商品购买'
         },
         {
           path:'/home/newslist',
           query:{id:222,sb:this.count},
           title:'留言反馈'
         },
         {
           path:'/home/newslist',
           query:{id:222,sb:this.count},
           title:'视频专区'
         },
         {
           path:'/home/newslist',
           query:{id:222,sb:this.count},
           title:'联系我们'
         }
       ]      
     }
    },
    components:{
      fuck:{
        template:'<div><button v-on:click="ck">You clicked me {{ sb }} times.</button><button @click="myclick">啊啊啊</button></div>',
        data(){
          return{
            sb:this.parentmsg,
            sonmsg: {title:'这是子组件的数据~~',num:233}
          }
        },
        props:['parentmsg'],
        methods:{
          ck(e){
            this.sb++;
          },
          myclick(){
            this.$emit('func',this.sonmsg)
          }
        }
      },
      MemberContainer
    },
    created(){
      this.getLunbotu().then(res => {
        this.newslist = res;
        console.log(this.newslist)
      });
      return this.count;
    },
    methods:{

      getLunbotu(){
        return new Promise((resolve, reject) => {
          this.$axios({
            method: 'post',
            url: this.GLOBAL + '/doc/api/common/newsArticle/findArticleInformation',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: `data=${JSON.stringify(this.urldata)}`
            //   this.qs.stringify({    //这里是发送给后台的数据
            //   articleType:0
            // })
          }).then((response) => {
            resolve(response.data.data.list);
            // this.newslist = response.data.data.list;
            // console.log(this.newslist)
            //请求成功返回的数据
          }).catch((error) => {
            console.log(error)       //请求失败返回的数据
          })
        })
      },

      show(a){
        this.dataMsgFromson=a;
        console.log('这是子组件传过来的数据'+'+'+this.dataMsgFromson.title)
      },

      active(index){
        this.actives = index;
      }

    },
    computed:{
      shuzu(){
        let sb = [];
        if(this.newslist.length>0){
        for(let i=0; i<3; i++){
          sb.push(this.newslist[i])
        }
        return sb
        }
      }
    },
    watch:{
      demo(val,old){
        console.log(val+'---'+old)
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
  .sss{
      display: flex;
      flex-wrap: wrap;
      padding: 0;
    list-style: none;
      li {
        width: 50%;
      }
  }
  .active{
    color:red;
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
