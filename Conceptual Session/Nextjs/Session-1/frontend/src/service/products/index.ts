export const getAllProducts = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`,
            {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json" 
                },
                next: {
                    revalidate: 10
                }
            },            
        )        
        const result = await res.json()
        return result
    } catch (error:any) {
        return Error(error)
    }
}



export const getSingleProduct = async (id:string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/products/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json" 
                },
                next: {
                    revalidate: 10
                }
            },            
        )        
        const result = await res.json()
        return result
    } catch (error:any) {
        return Error(error)
    }
}