interface IDeveloper <T, B = null > {    // using default_value null will not need to forcefully send 2nd argument while calling
    name : string,
    salary : number,
    device : {
        brand : string,
        model : string,
        releasedYear : string,
    },
    smartWatch : T  // this may vary from user to user
    bike? : B  // this may vary from user to user && may be available or not
}

type FeaturesForPoor = {
    heartRate : string,
    stopWatch : boolean,
}

const poorDevlopers : IDeveloper <FeaturesForPoor, {bike : 'yamaha', engine : '200cc'}> = {
    name : "prince",
    salary : 200,
    device : {
        brand : 'hp',
        model : 'hp021',
        releasedYear : '2021'
    },
    smartWatch : {
        heartRate : '200',
        stopWatch : true
    },
    
}


// for clen code you can make a type / interface of 'FeaturesForPoor' and set the objects
const richDevlopers : IDeveloper<{
    callSupport : boolean,
    calculator : boolean,
    aiFeature : boolean
}> = {
    name : "prince",
    salary : 6000,
    device : {
        brand : 'lenovo',
        model : 'ideapad',
        releasedYear : '2025'
    },
    smartWatch : {
        callSupport : true,
        calculator : true,
        aiFeature : true
    },
    bike : null,
}