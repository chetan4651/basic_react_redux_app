console.log('in action')
export const GET_ALL = (users) => ({
    type: 'GET_ALL',    
    users
  });

export const GET_FILTER_LIST = (searchKey,filteredList) =>({
  type:"GET_FILTER_LIST",
  filteredList,
  searchKey
});
  
