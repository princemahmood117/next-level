type A = Awaited<Promise<string>>


type Product = {
    id : number,
    name : string,
    price : string,
    stock : number
    color? : string
}

type ProductSummary = Pick<Product, "id" | 'name' | 'price'>

type WithoutTypes = Omit<Product, 'stock'>  // all types except stock

type RequiredType = Required<Product>  // types are must be present

type PartialType = Partial<Product>  // all becomes optional chainig

type RecordType = Record<string,unknown>


const product1 = {
    id : 123,
    name : 'keyboard',
    price : '200'
}

