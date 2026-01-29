// parameter types declaration
type Ioptions = {
    page? : number | string;
    limit? : number | string;
    sortOrder? : string;
    sortBy? : string
}

// return type of the fucntion
type IOptionsResult = {
    page : number;
    limit : number;
    skip : number;
    sortBy : string;
    sortOrder : string
}



const paginationSortingHelper = (options : Ioptions) : IOptionsResult => {

    // console.log('options from helper : ', options);
    const page : number = Number(options.page) || 1;
    const limit : number = Number(options.limit) || 5;
    const skip = (page - 1)  * limit;

    const sortBy : string | undefined = options.sortBy || 'createdAt'
    const sortOrder : string | undefined = options.sortOrder || 'desc'


    return {
        page,
        limit,
        skip,
        sortBy,
        sortOrder,
    };
    

}

export default paginationSortingHelper