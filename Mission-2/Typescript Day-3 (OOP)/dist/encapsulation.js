"use strict";
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
    addBalance(balance) {
        return this.userBalance = this.userBalance + balance;
    }
}
const userInfo = new BankAccount(117, 'prince', 30000);
console.log(userInfo.addBalance(200));
console.log(userInfo);
//# sourceMappingURL=encapsulation.js.map