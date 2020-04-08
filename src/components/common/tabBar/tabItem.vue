<template>

<div class="tabitem" @click="click">
   <!-- <img src="../../assets/image/tabbar/home.svg" alt="">
        <div>  首页</div>
         -->



<div v-if="!isActive"><slot name="item-icon"></slot></div>
<div v-else><slot name="item-icon-active"></slot></div>

<div :style="activeStyle"><slot name="item-text"></slot>
</div>
    
  </div>

</template>

<script>
export default {
    name:'tabItem',
   props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
    
    
   },
   
    data(){
     return{
        // isActive:false
     }
    },

   computed:{
     isActive(){
       //动态获取活跃路径改变样式
       return this.$route.path.indexOf(this.path)!==-1
     },



    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }

   },




    methods:{
      click(){
        this.$router.replace(this.path)
      }
    }

}
</script>

<style>
.tabitem{
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}


.tabitem img{
    width: 24px;
    height:24px;
    vertical-align: middle;
    margin-bottom: 2px;
}



</style>