<template>
 <div id="home" class="wrapper">
<nav-bar class="home-nav"><span slot="center">购物街</span></nav-bar>
<tab-control :titles='["流行","精选","新款"]' @tabclick="tabclick" ref="tabcontrol1"
class="tab-control"
v-show="isTabFixed"
/>

  <scroll class="content" ref="scroll" :probeType="probeType" @scroll="ContentScroll" 
  :pullUpLoad="pullUpLoad"
  @pullingUp="LoadMore"
  >
      <home-swiper :banner="banner" @swippimageload="swippimageload"></home-swiper>
<recommend-view :recommend="recommend"/>
<feature-view/>
<tab-control :titles='["流行","精选","新款"]' @tabclick="tabclick" ref="tabcontrol2"

/>
<goods-list :goods="showgoods"/>
 
  </scroll>
  <!-- 监听某个组件需要加上nactive -->
 <back-top @click.native="backClick" v-show="isShowBack"/>
 </div>
</template>

<script>



import NavBar from '../../components/common/navbar/NavBar'
import TabControl from '../../components/content/tabControl/TabControl'
import GoodsList from '../../components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll'
import backTop from '../../components/content/backTop/backTop'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'


import {getHomeMultidata,getHomeGoods} from '../../network/home'

import {itemListenerMixin} from '../../common/mixin'


 export default {
   //混入
mixins:[itemListenerMixin],
   data () {
     return {
         banner:[],
         recommend:[],
         goods:{
           'pop':{page:0,list:[]},
           'new':{page:0,list:[]},
           'sell':{page:0,list:[]}
         },
         currentType:'pop',
         probeType:3,
         isShowBack:false,
         pullUpLoad:true,
         taboffsetTop:0,
         isTabFixed:false,
         saveY:0,
     


     }
   },

    created(){
        //1.请求多个数据
      this.getHomeMultidata()
      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
     
        

    },

    mounted(){
      // console.log("home ")测试混入是否成功

     
      // 获取tabcontrol的offsetTop
      // 所有的组件都有一个属性$el,用于获取组件中的元素
     
    this.taboffsetTop=this.$refs.tabcontrol
       
   
  

    },
computed:{
  showgoods(){
    return  this.goods[this.currentType].list
  },
 
},


activated(){
  this.$refs.scroll.scrollTo(0,this.saveY,0)
  this.$refs.scroll.refresh()

},
deactivated(){
  // 1.保存Y值
 this.saveY=this.$refs.scroll.getScrollY()
//取消全局事件的监听
this.$bus.$off('itemImgLoad',this.itemImgListener)
console.log(this.itemImgListener)


},




methods:{
 

//事件监听
tabclick(index){
  switch(index){
    case 0:
      this.currentType='pop'
      break
      case 1:
        this.currentType='new'
        break
        case 2:
          this.currentType='sell'
          break

  }
  //分别设置编号让两个tabcontroll点击的index保持一致
  this.$refs.tabcontrol1.currentIndex=index
this.$refs.tabcontrol2.currentIndex=index
},
 //轮播图图片加载
  swippimageload(){
   this.taboffsetTop= this.$refs.tabcontrol2.$el.offsetTop
  },
 
backClick(){
 
  //通过ref拿到scroll对象就可以访问里面的对象属性和方法
 //访问属性
  // console.log( this.$refs.scroll.scroll)
  //回到顶部的方法：访问方法
  this.$refs.scroll.scrollTo(0,0,500)
  this.$refs.scroll.finishPullUp()
 
 
},
ContentScroll(position){
  //判断滑动值是否大于一千，大于会等于true
  // 1.判断backTop是否显示
 this.isShowBack=-(position.y)>1000
//  2.决定tabcontrol是否吸顶(position:fixed)
this.isTabFixed=(-position.y)>this.taboffsetTop

},

LoadMore(){
 this.getHomeGoods(this.currentType)
 //图片加载完refresh重新计算高度
//  this.$refs.scroll.refresh()
console.log("上拉加载更多")
},












  // 网络器请求相关
  getHomeMultidata(){

 getHomeMultidata().then(res=>{
      this.banner=res.data.banner.list  
      this.recommend=res.data.recommend.list
     
        })

      },


getHomeGoods(type){
  const page=this.goods[type].page+1
  getHomeGoods(type,page).then(res=>{
   
    this.goods[type].list.push(...res.data.list)
    this.goods[type].page+=1
    //完成上拉加载更多
    this.$refs.scroll.finishPullUp()

  })

}









},





   components: {
       NavBar,
      HomeSwiper,
       RecommendView,
       FeatureView,
        TabControl,
        GoodsList ,
        Scroll,
        backTop 
   }
 }
</script>

<style scoped>


#home{
  /* padding-top:44px; */
  height:100vh;
  position: relative;
}

.home-nav{
    background-color: var(--color-tint);
    color:white;

/* 固定导航栏 */
/* position: fixed;
left:0;
right:0;
top:0;
z-index: 9; */


}



.content{
 /* height:3000px; */
 overflow: hidden;
 position: absolute;
 top:44px;
 bottom: 4px;
 left:0;
 right:0

 

}

.tab-control{
  position: relative;
  z-index: 9;
}



/* 
.content{
  height:calc(100%-98px);
  overflow:hidden
  
} */


 
</style>
