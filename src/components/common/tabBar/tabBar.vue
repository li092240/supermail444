<template>
 
<div id="tabbar">
  <slot></slot>
</div>
</template>

<script>
export default {
    name:'tabBar'

}
</script>

<style>

#tabbar{
  display:flex;
  background-color: #f6f6f6;
  box-shadow: 0 -3px 1px rgba(100, 100,100, .1);
  
  
  position: fixed;
  right:0;
  left:0;
  bottom: 0;
}



</style>