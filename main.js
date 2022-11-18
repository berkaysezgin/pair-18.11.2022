// instanc
import { FileLogger, MssqlLogger } from "./crossCuttingConcerns/logging/logger.js";
import ProductService from "./services/productService.js";

// nesne ve obje
let logger = new FileLogger();
let logger1 = new MssqlLogger();

let loggers = [logger, logger1];
// polymorphism
let productService = new ProductService(loggers);
let newProduct={ id: 7, name: "Tarak", unitPrice: 50, stock: 7 };
productService.add(newProduct);
console.log(productService.getAll());
console.log(productService.getById(3));
productService.delete(3);
console.log(productService.getAll());
let newProduct2={ id: 5, name: "Tarak", unitPrice: 50, stock: 7 };
productService.update(newProduct2);
console.log(productService.getAll());


// userService.add({ id: 1 })