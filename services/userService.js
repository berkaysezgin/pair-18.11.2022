
import { users } from "../data/users.js"

export default class UserService {

//prototype
// DI - Dependency Injection
    constructor(logger) {
        this.logger = logger;
        this.userList = users;
    }

    add(user) {
        
        for (let logger of this.loggers) {
            logger.log("UserService.Add method")
        }
        console.log(this.type)
}
    
    

    getAll() {
        for (let logger of this.loggers) {
            logger.log("UserService.Add method")
        }
        return this.userList;
    }

    getById(id) {
        let userToFind = this.userList.find(user => user.id === id);
        return userToFind ?? null;
    }

    delete(id) {
        this.userList = this.userList.filter(user => user.id !== id);
    }

}