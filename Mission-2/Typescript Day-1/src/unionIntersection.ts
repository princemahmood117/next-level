// ! union  --> |

type UserROle = 'admin' | 'user' | 'guest'

const getDashboard = (role : UserROle) => {
    if(role === 'admin') {
        return "Admin Dashboard"
    }
    else if (role === 'user') {
        return 'User Dashboard'
    }
    else {
        return "Guest Dashboard"
    }
}

console.log(getDashboard('user'));


// ! intersection --> &

type Employee = {
    name : string,
    id : string,
    phone : string,
}
type Manager = {
    designation : string,
    teamSize : number,
}

type EmployeeManager = Employee & Manager  // '&' means the properties must be present 

const worker : EmployeeManager = {
    name : 'Tareq Zia',
    id : '117',
    phone : '101010101',
    designation : 'manager',
    teamSize : 20
}

console.log(worker);