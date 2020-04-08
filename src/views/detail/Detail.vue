<template>
 <div id="detail">
  <detail-nav class="detail-nav" @itemclick="itemclick" ref="nav"/>
 <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentscroll">
    <detail-swipper :topImages="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
    <detail-params-info ref="params" :paramInfo="paramInfo"/>
    <detail-comment-info ref="comment" :commentInfo="commentInfo"/>
  <!-- <goods-list :goods="recommends"/>  -->
   <!-- 监听某个组件需要加上nactive -->
 <back-top @click.native="backClick" v-show="isShowBack" />
 </scroll>
 <detail-bottom-bar @addtoCart="addtoCart"/>
 <toast :message="message" :isShow="isShow"/>
 </div>
</template>

<script>
import DetailNav from './DetailChild/DetailNav'
import {getDetail,Goods,Shop,GoodsParams,getRecommend} from '../../network/detail'
import DetailSwipper from '../../views/detail/DetailChild/DetailSwipper'
import DetailShopInfo from '../../views/detail/DetailChild/DetailShopInfo'
import DetailBaseInfo from '../../views/detail/DetailChild/DetailBaseInfo'
import DetailGoodsInfo from '../../views/detail/DetailChild/DetailGoodsInfo'
import DetailParamsInfo from '../../views/detail/DetailChild/DetailParamInfo'
import DetailCommentInfo from '../../views/detail/DetailChild/DetailCommentInfo'
import DetailBottomBar from '../../views/detail/DetailChild/DetailBottomBar'
import BackTop from '../../components/content/backTop/backTop'
import Scroll from '../../components/common/scroll/Scroll'
import Toast from '../../components/common/toast/Toast'
// import GoodsList from '../../components/content/goods/GoodsList'
import { itemListenerMixin} from '../../common/mixin'
import { debounce } from '../../common/util'
//将ations映射到组价
import {mapActions} from 'vuex'


 export default {
   name:'Detail',

 //混入
mixins:[itemListenerMixin],


   data () {
     return {
       iid:null,
       topImages:[],
       goods:{},
       shop:{},
       detailInfo:{},
   paramInfo:{},
   commentInfo:{},
   recommends:[],
   themeTopYs:[],
   getThemeTopY:null,
   currentIndex:0,
   isShowBack:false,
   message:'',
   isShow:false

 

     }
   },
 created(){
  //  1.保存传入的iid
   this.iid=this.$route.params.iid
  //  2.根据iid请求详情数据
  getDetail(this.iid).then(res=>{
    const data=res.result
    // 1.获取顶部的图片轮播数据

    this.topImages=data.itemInfo.topImages
    // 2.获取商品信息
    this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
//     //3. 获取商定信息
    this.shop=new Shop(data.shopInfo)
//     //保存商品的详情数据
    this.detailInfo=data.detailInfo
//     //商品详情参数
    this.paramInfo=new GoodsParams(data.itemParams.info,data.itemParams.rule)
// // 取出评论信息
if(data.rate.cRate !==0){
  this.commentInfo=data.rate.list[0]
}
    
//     // //请求推荐数据
    // getRecommend().then(res=>{
    //   this.recommends=res.data.list
    // })

this.$nextTick(()=>{
  //根据最新的数据，对应的dom是已经被渲染出来
  //但是图片依然是没有加载完成（目前获取到的offsetTop不包含其中的图片）
  //offsetTop值不对的时候，都是因为图片的问题
//   this.themeTopYs=[]
//     this.themeTopYs.push(0)
// //通过ref获取组件再通过$el拿到offsetTop
// this.themeTopYs.push(this.$refs.params.$el.offsetTop)
// this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
// console.log(this.themeTopYs)

})



  
  })
// 4.给getThemeTopY赋值(对赋值操作进行防抖)
this.getThemeTopY=debounce(()=>{
     this.themeTopYs=[]
    this.themeTopYs.push(0)
//通过ref获取组件再通过$el拿到offsetTop
this.themeTopYs.push(this.$refs.params.$el.offsetTop)
this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
console.log(this.themeTopYs)


})



 },
 methods:{
   ...mapActions(['addCart']),

backClick(){
 
  //通过ref拿到scroll对象就可以访问里面的对象属性和方法
 //访问属性
  // console.log( this.$refs.scroll.scroll)
  //回到顶部的方法：访问方法
  this.$refs.scroll.scrollTo(0,0,500)
  this.$refs.scroll.finishPullUp()
 
 
},
addtoCart(){
  // 1.获取购物车需要展示的信息
  const product={}
  product.image=this.topImages[0];
  product.title=this.goods.title;
  product.desc=this.goods.desc;
  product.price=this.goods.newPrice;
  product.iid=this.iid
  // 2.将商品添加到购物车里(actions可以返回一个promise)
  //第一种方法
  // this.$store.commit('addCart',product)
  // this.$store.dispatch('addCart',product).then(res =>{
  //   console.log(res)
  // })

//第二种方法
//利用mapaction映射
this.addCart(product).then(res=>{
  this.isShow=true
 this.message=res
})
setTimeout(()=>{
  this.isShow=false
},1500)
 

},





  imageLoad(){
        this.$refs.scroll.refresh()
        //在图片加载完成之后在获取offsetTop才是正确的
        this.getThemeTopY()
     
       
   },
   itemclick(index){
     console.log(index);
     this.$refs.scroll.scrollTo(0, -this.themeTopYs[index],200)

   },
   contentscroll(position){
    //  console.log(position)
    // 1.获取y值
    const positionY=-position.y
    //2.positiony和主题中值进行对比

    let length=this.themeTopYs.length
    for(let i=0;i<length;i++){
      if(this.currentIndex!==i &&((i<length-1 && positionY>=this.themeTopYs[i] && positionY<
      this.themeTopYs[i+1])||(i===length-1 && positionY>=this.themeTopYs[i]))){
        this.currentIndex=i
        console.log(this.currentIndex)
        this.$refs.nav.currentindex=this.currentIndex
      }
    }

//3.是否显示回到顶部
this.isShowBack=-(position.y)>1000
//  2.决定tabcontrol是否吸顶(position:fixed)
this.isTabFixed=(-position.y)>this.taboffsetTop

   }

  




 },

mounted(){
   this.taboffsetTop=this.$refs.tabcontrol
       


},



// updated(){
//   this.themeTopYs.push(0)
// //通过ref获取组件再通过$el拿到offsetTop
// this.themeTopYs.push(this.$refs.params.$el.offsetTop)
// this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
// console.log(this.themeTopYs)

// },




 destroyed(){
  this.$bus.$off('itemImgLoad',this.itemImgListener)
  console.log(this.itemImgListener)

 },


 components:{
  DetailNav,
    DetailSwipper,
    DetailBaseInfo,
    Scroll,
     DetailShopInfo,
     DetailGoodsInfo,
      DetailParamsInfo,
      DetailCommentInfo,
       DetailBottomBar,
       BackTop,
       Toast
      // GoodsList
    

 },






 }
</script>

<style scoped>
#detail{
  position:relative;
  z-index:9;
  background-color: #fff;
  height:100vh
}


.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;

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

/* 
.content{
  height:calc(100%-44px)
} */
 
</style>
