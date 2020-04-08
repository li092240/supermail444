<template>
 <div>
<swiper>
    <swiper-item  v-for="(item,index) in banner" :key="index" >
        <a :href="item.link">
        <!-- 引用的是变量名所以要加冒号 -->
            <img :src="item.image" alt="" @load="imageLoad">
           </a> 

    </swiper-item>
</swiper>
 </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper'
 export default {
     props:{
         banner:{
             type:Array,
             default(){
                 return []
             }

         },
        
     },

data(){
    return{
        isLoad:false

    }
},



  
   components: {
       Swiper,
       SwiperItem

   },
   methods:{
       imageLoad(){
           if(!this.isLoad){
             this.$emit('swippimageload')
             this.isLoad=true
           }
      
       }
   }
       
   

 }
</script>

<style>

 
</style>
