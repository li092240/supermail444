<template>
  <div class="cart-list">
      <scroll class="content" ref="scroll">
          <good-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"/>
       
      </scroll>
         
      
  </div>

</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll'
import GoodListItem from './CartListItem'
import {mapGetters} from 'vuex'
export default {
    components:{
        Scroll, GoodListItem

    },
    activated(){
    this.$refs.scroll.refresh()

    },





    computed:{
        ...mapGetters(['cartList'])
    }

}
</script>

<style scoped>

.cart-list{
     height:calc(100%- 44px -49px)
}
 







.content{
    height: 100%;
    overflow: hidden
 

}

</style>