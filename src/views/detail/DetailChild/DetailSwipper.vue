<template>

    <swiper class="detail-swipper" >
    <swiper-item v-for="(item,index) in topImages" :key="index" >
        <img :src="item" alt="">

    </swiper-item>



    </swiper>
  
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper'
export default {
    name:'DetailSwipper',
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    }

}
</script>

<style>
.detail-swipper{
    height: 300px;
    overflow: hidden;

}

</style>