<template>
  <div class="toast" v-show="isShow">
      <div>{{message}}</div>

  </div>



</template>

<script>
export default {
    name:'Toast',
 props:{
        message:{
        type:String,
        default:''
    },
    isShow:{
        type:Boolean,
        default:false
    }
 },


 

}
</script>

<style scoped>
.toast{
    position:fixed;
    top:50%;
    left:50%;
    color:#fff;
    padding:10px 8px;
    transform:translate(-50%,-50%);
    background-color:rgba(0,0,0,.7)
}

</style>