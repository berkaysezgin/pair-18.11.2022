// instanc
import { FileLogger, MssqlLogger } from "./crossCuttingConcerns/logging/logger.js";
import OrderService from "./services/orderService.js";
import ProductService from "./services/productService.js";

// nesne ve obje
let logger = new FileLogger();
let logger1 = new MssqlLogger();

let loggers = [logger, logger1];
// polymorphism
let productService = new ProductService(loggers);
let newProduct = { id: 7, name: "Tarak", unitPrice: 50, stock: 7 };
//productService.add(newProduct);
/*console.log(productService.getAll());
console.log(productService.getById(3));
productService.delete(3);
console.log(productService.getAll());
let newProduct2={ id: 5, name: "Tarak", unitPrice: 50, stock: 7 };
productService.update(newProduct2);
console.log(productService.getAll());*/
// userService.add({ id: 1 })
let orderService = new OrderService(loggers);
let newOrder={id:4,userId:7,productx:[{id:3,name:"mousepad"},{name:"hesap makinesi"}]}
orderService.add(newOrder);
orderService.getAll();
orderService.delete(1);
orderService.getAll();
let newOrder2={id:2,userId:4,productx:[{name:"mousepad"},{id:1,name:"hesap makinesi"}]}
orderService.update(newOrder2);
orderService.getAll();
