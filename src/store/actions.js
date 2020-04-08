


export default{
    addCart(context,payload){
       
        let oldProduct=context.state.cartList.find(item=>item.iid ===payload.iid)
            return new Promise((resolve,reject) => {
                 // 2.判断oldproduct
        if(oldProduct){
            // oldProduct.count+=1
            context.commit('addCounter',oldProduct)
            resolve('当前的商品数量加一')
        }else{
            payload.count=1
            // state.cartList.push(payload)
            context.commit('addToCart',payload)
            resolve('添加了新的商品')

        }




            })


       
       
    }


}
