<template>
 <div class='bootom-bar'>
  <div clas="checked-content" >
         <check-button :is-checked="isSelectAll" class="checked-button"
         @click.native="checkClick"
         />
         <span>全选</span>
  </div>
  <div class="price">
      合计：{{totalPrice}}
  </div>
  <div class="calculate" >
      去计算：{{checkLength}}
      
  </div>

 </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton'
import {mapGetters} from 'vuex'

 export default {
     name:'CartBottomBar',
     components:{
         CheckButton
     },
     computed:{
           ...mapGetters(['cartList']),
         totalPrice(){

             return '￥' + this.$store.state.cartList.filter(item=>{
                 return item.checked
             }).reduce((preValue,item)=>{
                 return preValue+parseInt(item.price.slice(1))* item.count
             },0).toFixed(2)
         },
         checkLength(){
             return this.$store.state.cartList.filter(item=>item.checked).length

         },
         isSelectAll(){
               if(this.cartList.length===0) return false
             //1.第一种方法
            //  return !(this.cartList.filter(item=>!item.checked).length)
            // 2.第二种方法
         
             return !this.cartList.find(item=>!item.checked)

         }



       
     },
     methods:{
         
         checkClick(){
           if(this.isSelectAll){
               //全部选中
               this.cartList.forEach(item =>item.checked=false)
           }else{
               //部分或全部不选中
               this.cartList.forEach(item=>item.checked=true)
           }
         },
        
     }
    






 
     }
  




 
</script>

<style scoped>
.bootom-bar{
    height:44px;
    display:flex;
   
    position:relative;
    line-height:44px;
     background-color:#eee;
}

.checked-content{
    display:flex;
    align-items: center;
}

.checked-button{
    width:22px;
    height:22px;
    line-height:22px
}
 .price{
     margin-left:30px
    
 }
</style>
