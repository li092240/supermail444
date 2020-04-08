<template>
 <div>

    <tabBar>
    <tabItem path='/home'  >
      <img  slot="item-icon" src="../../../assets/image/tabbar/home.svg" alt="">
       <img  slot="item-icon-active" src="../../../assets/image/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
     
    </tabItem>
 <tabItem path="/category" >
    <img  slot="item-icon" src="../../../assets/image/tabbar/category.svg" alt="">
     <img  slot="item-icon-active" src="../../../assets/image/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
     

 </tabItem>
 <tabItem path="/cart" >
       <img  slot="item-icon" src="../../../assets/image/tabbar/shopcart.svg" alt="">
        <img  slot="item-icon-active" src="../../../assets/image/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
     
 </tabItem>
 <tabItem path="/profile" >
       <img  slot="item-icon" src="../../../assets/image/tabbar/profile.svg" alt="">
        <img  slot="item-icon-active" src="../../../assets/image/tabbar/profile_active.svg" alt="">
      <div slot="item-text">个人</div>
     
 </tabItem>

    </tabBar>
 </div>
</template>

<script>

import tabBar from "../../common/tabBar/tabBar"
import tabItem from "../../common/tabBar/tabItem"
 export default {
     name:'MaintabBar',
   data () {
     return {

     }
   },
     components:{
    tabBar,
    tabItem
  }

 }
</script>

<style>

 
</style>
