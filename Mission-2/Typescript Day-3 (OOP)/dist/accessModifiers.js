"use strict";
// access modify
// private properties cannot be accessed by instances. they only can be accessed inside class
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    userId;
    userName;
    balance;
    password;
    constructor(userId, userName, balance, password) {
        this.userId = userId;
        this.userName = userName;
        this.balance = balance;
        this.password = password;
    }
    // method to access the private property
    addBalance(balance) {
        return this.balance = this.balance + balance;
    }
}
// FOR PROTECTED
class UserInfo extends BankAccount {
    getUserData() {
        // console.log(this.balance); // eror : private property cannot be accessed by sub-class
        console.log('accesses protected password : ', this.password); // protected property can be accessed by sub-class
    }
}
const userDetailsProtected = new UserInfo(117, 'prince', 70, 'xyz1234');
userDetailsProtected.getUserData();
const userDetails = new BankAccount(117, 'prince', 70, 'xyz1234');
console.log(userDetails);
// userDetails.userId = 123   // can not modidy the read-only property
// const userBalance = userDetails.balance + 30  // balance is private, it caant be accessed
// accessing private propery using method / function
const newBalance = userDetails.addBalance(20);
console.log(newBalance);
//# sourceMappingURL=accessModifiers.js.map