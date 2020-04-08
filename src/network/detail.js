import {request} from './request'
//对多种对象的数据放到一个对象传给子组件
export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}



export function getRecommend(){
    return request({
        url:'/recommend'
    })
}



export class Goods{
    constructor(itemInfo,colums,services){
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.newPrice=itemInfo.price
        this.oldPrice=itemInfo.oldPrice
        this.discount=itemInfo.discountDesc
        this.colums=colums
        this.services=services
        this.realPrice=itemInfo.lowNowPrice
        this.desc=itemInfo.desc


    }
}





export class GoodsParams{
    constructor(info,rule){
        this.image=info.image?info.images[0]:'';
        this.infos=info.set;
        this.sizes=rule.tables
    }
}














export class Shop{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo;
        this.name=shopInfo.name;
        this.fans=shopInfo.cFans;
        this.sells=shopInfo.cSells;
        this.score=shopInfo.score;
        this.goodsCount=shopInfo.cGoods
    }
}