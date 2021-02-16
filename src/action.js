export const actionEdit=(movie)=>{
     return {
        type:'EDIT',
        payload: movie
     };

}
export const actionDelete=(updatedList)=>{
    return {
        type:'DELETE',
        payload: updatedList
     };
}
export const actionAdd=(movie)=>{
    return {
        type:'ADD',
        payload: movie
     };
}