<template>
 <div class="wrapper" ref="aaa">
<ul class="content">
  <button @click="btnclick">按钮</button>
 <li>11</li>
 <li>12</li>
 <li>13</li>
 <li>14</li>
 <li>15</li>
 <li>16</li>
 <li>17</li>
 <li>18</li>
 <li>19</li>
 <li>110</li>
 <li>1221</li>
 <li>1222</li>
 <li>1223</li>
 <li>1224</li>
 <li>1225</li>
 <li>1226</li>
 <li>1227</li>
 <li>1228</li>
 <li>1229</li>
 <li>12210</li>
 <li>12211</li>
 <li>12212</li>
 <li>12213</li>
 <li>12214</li>
 <li>12215</li>
 <li>12216</li>
 <li>12217</li>
 <li>12218</li>
 <li>12219</li>
 <li>12220</li>
 <li>12221</li>
 <li>12222</li>
 <li>12223</li>
 <li>12224</li>
 <li>12225</li>
 <li>12226</li>
 <li>12227</li>
 <li>12228</li>
 <li>12229</li>
 <li>12230</li>
 <li>12231</li>
 <li>12232</li>
 <li>12233</li>
 <li>12234</li>
 <li>12235</li>
 <li>12236</li>
 <li>12237</li>
 <li>12238</li>
 <li>12239</li>
 <li>12240</li>
 <li>12241</li>
 <li>12242</li>
 <li>12243</li>
 <li>12244</li>
 <li>12245</li>
 <li>12246</li>
 <li>12247</li>
 <li>12248</li>
 <li>12249</li>
 <li>12250</li>
 <li>12251</li>
 <li>12252</li>
 <li>12253</li>
 <li>12254</li>
 <li>12255</li>
 <li>12256</li>
 <li>12257</li>
 <li>12258</li>
 <li>12259</li>
 <li>12260</li>
 <li>12261</li>
 <li>12262</li>
 <li>12263</li>
 <li>12264</li>
 <li>12265</li>
 <li>12266</li>
 <li>12267</li>
 <li>12268</li>
 <li>12269</li>
 <li>12270</li>
 <li>12271</li>
 <li>12272</li>
 <li>12273</li>
 <li>12274</li>
 <li>12275</li>
 <li>12276</li>
 <li>12277</li>
 <li>12278</li>
 <li>12279</li>
 <li>12280</li>
 <li>12281</li>
 <li>12282</li>
 <li>12283</li>
 <li>12284</li>
 <li>12285</li>
 <li>12286</li>
 <li>12287</li>
 <li>12288</li>
 <li>12289</li>
 <li>12290</li>
 <li>12291</li>
 <li>12292</li>
 <li>12293</li>
 <li>12294</li>
 <li>12295</li>
 <li>12296</li>
 <li>12297</li>
 <li>12298</li>
 <li>12299</li>
 <li>122100</li>

</ul>


 </div>
</template>

<script>
import BScroll from 'better-scroll'
 export default {
   data () {
     return {
       scroll:null

     }
   },
   components: {

   },

  //组件完成之后调用
  mounted(){
    this.scroll=new BScroll(document.querySelector('.wrapper'),{
      probeType:3,
      pullUpLoad:true

    })
    this.scroll.on('scroll',(position)=>{
      // console.log(position)
    })
    this.scroll.on('pullingUp',()=>{
      console.log("上拉加载更多")
    })

  },
  methods:{
    btnclick(){
      console.log("我我")
    }
  }



 }
</script>

<style scoped>


  .wrapper{

            /* 实现局部滚动效果 */
            height:200px;
            background-color:red;
            overflow:hidden ;
            /* overflow-y: scroll; */
        }
 
</style>
