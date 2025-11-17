class BankAccount {
    userId : number;
    userName : string;
    private userBalance : number;

    constructor(userId : number, userName : string, userBalance : number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance
    }

    addBalance(balance : number) {
        return this.userBalance = this.userBalance + balance
    }

}

const userInfo = new BankAccount(117, 'prince', 30000)

console.log(userInfo.addBalance(200));

console.log(userInfo);