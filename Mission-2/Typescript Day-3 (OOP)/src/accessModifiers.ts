
// access modify
// private properties cannot be accessed by instances. they only can be accessed inside class

class BankAccount {
    readonly userId : number;
    userName : string;
    private balance : number;
    protected password : string


    constructor(userId : number, userName: string, balance : number, password : string) {
        this.userId = userId;
        this.userName = userName;
        this.balance = balance;
        this.password = password
        
    }

    // method to access the private property
    addBalance(balance : number) {
        return this.balance = this.balance + balance
    }
}


// FOR PROTECTED
class UserInfo extends BankAccount {
    
    getUserData() {
        // console.log(this.balance); // eror : private property cannot be accessed by sub-class

        console.log('accesses protected password : ', this.password); // protected property can be accessed by sub-class
    }
}

const userDetailsProtected = new UserInfo(117, 'prince', 70, 'xyz1234')
userDetailsProtected.getUserData()


const userDetails = new BankAccount(117, 'prince', 70, 'xyz1234')
console.log(userDetails);

// userDetails.userId = 123   // can not modidy the read-only property

// const userBalance = userDetails.balance + 30  // balance is private, it caant be accessed

// accessing private propery using method / function
const newBalance = userDetails.addBalance(20)
console.log(newBalance);


