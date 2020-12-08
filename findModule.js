const {books,authors,publishers}=require('./data/file')
let some=(module)=>{
    switch(module){
        case 'books':
            return books;
            break;
        case 'authors':
            return authors;
            break;
        case 'publishers':
            return publishers;
            break;
        default:
            return {"message":"Please enter valid url"}
    }
}

module.exports=some

// const {data}=require('./file')
// let some=(aa)=>{
// console.log(Object.keys(data))
//     if(aa in Object.keys(data))
//     {
//         console.log(data)
//         return Object.values
//     }

// }


// module.exports=some