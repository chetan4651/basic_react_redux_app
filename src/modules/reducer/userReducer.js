const userReducer = function(state = {users:[],CommentList:[]},action){
  switch (action.type) {
      case 'GET_ALL':
        return {...state, users:action.users,searchKey:"",filteredList:[] }
        
      case 'GET_FILTER_LIST':
        return {...state, filteredList:action.filteredList,searchKey:action.searchKey }

      case 'GET_ALL_COMMENTS':
        return {...state, CommentList:action.CommentList}

      default:
        return state;
    }
  };

  export default userReducer;