// conditional type --> type depends on a condition

type A = null
type B = undefined

type C = A extends undefined ? true : B extends undefined ? true : false

type Vehicle = {
    bike : string,
    car : string,
    ship : string
}

type Check<T> = T extends keyof Vehicle ? true : false 

type Person = Check<'car'>