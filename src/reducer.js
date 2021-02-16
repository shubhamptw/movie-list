const mainReducer=(state=[], action)=>{

    switch(action.type){
        case'EDIT':
             let id=action.payload.movieId;
             let updatedState=state;
             updatedState[id]=action.payload;
            return updatedState;


        case 'DELETE':
            return action.payload;
        case 'ADD':
            // console.log('payload'+action.payload);
            return  [...state, action.payload];

        default:
            return state;    
    }

}

export default mainReducer;