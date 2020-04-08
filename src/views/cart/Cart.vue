<template>
 <div class="cart">


   <!-- 导航 -->
   <nav-bar class="navbar">
     <div slot="center">购物车({{cartLength}})</div>
   </nav-bar>
   <!-- 商品的列表 -->
   <cart-list/>


   <!-- 底部汇总 -->
   <cart-bottom-bar/>

 </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import {mapGetters} from 'vuex'
import CartList from './Cartchild/CartList'
import CartBottomBar from './Cartchild/CartBottomBar'

 export default {
   components:{
     NavBar,
     CartList,
     CartBottomBar
     
   },
   computed:{
    //  cartLength(){
    //    return this.$store.getters.cartLength
    //  }

//把getters里面的计算属性映射到组件就可以直接使用
...mapGetters(['cartLength'])

   }
   




 }
</script>

<style scoped>
.navbar{
 background-color: chartreuse;
 color:#fff

  
}

 
</style>
