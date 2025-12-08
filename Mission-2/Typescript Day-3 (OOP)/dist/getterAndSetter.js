"use strict";
// getter and setter
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    userId;
    userName;
    userBalance;
    constructor(userId, userName, userBalance) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    // set new balance using function call
    // addBalance(bal : number) {
    //    return this.userBalance = this.userBalance + bal
    // }
    // (NEW) set new balance using setter
    set addBalance(amount) {
        this.userBalance = this.userBalance + amount; // set automatically returns the value
    }
    // get balance using function call
    // getBalanc() {
    //   this.userBalance
    // }
    // (NEW) get balance using getter
    get getBalance() {
        return this.userBalance; // have to write return explicitely
    }
}
const userObj = new BankAccount(123, 'prince', 2000);
userObj.addBalance = 200;
console.log('from get balance : ', userObj.getBalance);
console.log(userObj);
//# sourceMappingURL=getterAndSetter.js.map