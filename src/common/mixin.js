//混入
import{debounce} from './util'
export const itemListenerMixin={


    data(){
        return{
            itemImgListener:null,
            refresh:null
        }

    },




    mounted(){
         this.refresh=debounce(this.$refs.scroll.refresh)
     
        //对监听的事件进行保存
        this.itemImgListener=()=>{
           //图片加载完成后重新计算scroll高度
           //  console.log("----")
        this.refresh()
        }
        
        // 3.监听item中图片加载完成
         this.$bus.$on('itemImageLoad',this.itemImgListener
          
         )
         console.log("mixin")
    }
  

}