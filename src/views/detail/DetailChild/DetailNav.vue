<template>
<div>
    <nav-bar>
        <div slot="left" class="back" @click="backclick">
    <img src="../../../assets/image/common/back.svg" alt="">

</div>

 <div  slot="center" class="detail">
<div class="detainav" v-for="(item,index) in titles" :key="index" 
:class="{active:index===currentindex}"
@click="itemclick(index)"
>
    {{item}}
</div>
 </div>
    </nav-bar>
</div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'
 export default {
   data () {
     return {
         titles:[
             "商品",
             "参数",
             "评论",
             "推荐"


         ],
         currentindex:0

     }
   },


methods:{
    itemclick(index){
      this.currentindex=index
      //事件发送给detail
      this.$emit('itemclick',index)
    },
    backclick(){
        this.$router.back()
    }

},


   components: {
  NavBar
   }
 }
</script>

<style>
.detail{
    display: flex;
    margin-top:5px;
}

.detainav{
  text-align: center;
  flex:1
}
.active{
    color:pink
}
.back img{
    width:20px;
    height:20px


}
 
</style>
