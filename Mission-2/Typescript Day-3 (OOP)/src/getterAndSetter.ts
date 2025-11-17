// getter and setter

class BankAccount {
    userId : number;
    userName : string;
    private userBalance : number;

    constructor(userId : number, userName : string, userBalance : number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    // set new balance using function call
    // addBalance(bal : number) {
    //    return this.userBalance = this.userBalance + bal
    // }



     // (NEW) set new balance using setter
     set addBalance(amount : number){
        this.userBalance = this.userBalance + amount  // set automatically returns the value
     }


     
    // get balance using function call
    // getBalanc() {
    //   this.userBalance
    // }




    // (NEW) get balance using getter
    get getBalance() {
        return this.userBalance  // have to write return explicitely
    }
}


const userObj = new BankAccount(123, 'prince', 2000)
userObj.addBalance = 200

console.log('from get balance : ', userObj.getBalance);


console.log(userObj);
