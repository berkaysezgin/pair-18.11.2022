import { products } from "../data/products.js";

export default class ProductService{
    constructor(logger){
        this.productList=products;
        this.logger=logger;
    }
    
    add(product) {
        
        for (let logger of this.logger) {
            logger.log("ProductService.Add method")
            
        }
        this.productList.push(product);
    }
    getAll() {
        for (let logger of this.logger) {
            logger.log("ProductService.GetAll method")
        }
        return this.productList;
    }
    

    getById(id) {
        for (let logger of this.logger) {
            logger.log("ProductService.GetById method")
        }
        return this.productList.find(u=>u.id==id);
    }

    delete(id) {
        for (let logger of this.logger) {
            logger.log("ProductService.Delete method")
        }
        this.productList = this.productList.filter(product => product.id !== id);
    }
    update(product){
        for (let logger of this.logger) {
            logger.log("ProductService.Update method")
        }
    let index=this.productList.findIndex(u=>u.id==product.id);
   //   let updatedProductList =this.productList.find(u=>u.id==product.id);
     this.productList[index]=product;
    
    }

}
