const reducerPagination=(state=[], action)=>{
    if(action.type=="PAGINATE"){
        // console.log(data);
        console.log("inside reducer Pagination")
        let data=action.payload;
        return data;

    }
    else {
        return state;
    }

}
export default reducerPagination;