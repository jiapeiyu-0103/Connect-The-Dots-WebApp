const favListReducer = (state = [], action) => {
	switch (action.type) {
        case 'Fav':
         if(state.includes(action.id)){
            return state;
         } else {
            
            return [...state,action.id];
         }

        case 'UnFav':
        
            return state.splice(state.findIndex(obj=>obj===action.id),1);
            
        default:
           return state;

	}
}

export default favListReducer;