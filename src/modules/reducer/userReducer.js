const userReducer = function(state = {users:[]},action){
  switch (action.type) {
      case 'GET_ALL':
        return {...state, users:action.users,searchKey:"",filteredList:[] }
        
      case 'GET_FILTER_LIST':
        return {...state, filteredList:action.filteredList,searchKey:action.searchKey }
      
      default:
        return state;
    }
  };

  export default userReducer;