import { orders } from "../data/orders.js";

export default class OrderService{
    constructor(logger){
        this.orderList=orders;
        this.logger=logger;
       
    }
    checkOrdersStatus(order) {
        let hasOrdersStatus = true;
        for(let i=0;i<order.productx.length;i++) {
        if (!order.userId || !order.productx[i].id) {
          hasOrdersStatus = false;
        
        }
    }
        return hasOrdersStatus;
      }
    add(order) {
        
        for (let logger of this.logger) {
            logger.log("OrderService.Add method")
            
        }
       if( this.checkOrdersStatus(order)){
        this.orderList.push(order);
       }
       else{
        console.log("Sipariş bilgisi eksik girildi...");
       }
   
}
    
    getAll() {
        for (let logger of this.logger) {
            logger.log("OrderService.GetAll method")
        }
    for (let index = 0; index < this.orderList.length; index++) {
        console.log(this.orderList[index]) 
        
    }
        
    }
    delete(id) {
        for (let logger of this.logger) {
            logger.log("OrderService.Delete method")
        }
        this.orderList = this.orderList.filter(order => order.id !== id);
    }


    update(order){
        for (let logger of this.logger) {
            logger.log("OrderService.Update method")
        }
        if(this.checkOrdersStatus(order)){
        
    let index=this.orderList.findIndex(u=>u.id==order.id);
   //   let updatedProductList =this.productList.find(u=>u.id==product.id);
     this.orderList[index]=order;
        }
        else{
            console.log(" Güncellenen sipariş bilgisi eksik girildi...");
        }
    }

}