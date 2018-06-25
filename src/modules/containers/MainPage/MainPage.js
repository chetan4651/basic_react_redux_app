import React, { Component } from 'react';
import './MainPage.css';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import axios from 'axios';
import {GET_ALL,GET_FILTER_LIST} from '../../actions';
import TableRow from '../../components/TableRow';
import EmptyTableRow from '../../components/EmptyTableRow';
import { Redirect } from "react-router-dom";

class MainPage extends Component {

  state={
    redirectFlag : false,
    redirectUrl:""
  }

  componentDidMount(){
    this.getUsers()
  }

  getUsers = () =>{
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
       this.props.getAllRecord(res.data)
    }).catch((err)=>{
        console.log("My error :: "+JSON.stringify(err));
    }); 
     
  }

  
  search = (e) =>{
    var searchKey = e.target.value.trim();
    var list = this.props.userList;
    this.props.getFilteredData(searchKey,list);
  }
   
  addNewUser = () =>{
     this.setState({redirectFlag:true, redirectUrl:"/addUser"});
  }
  
  render() {
    const {userList,searchKey,filteredList} = this.props;
    const EmptyTableMsg = "Records Not Found";

    if(this.state.redirectFlag){
      return <Redirect to={this.state.redirectUrl}/>;
    }

    return (
      <div >
          <Header />
          <div className = "MainPage">
          <input type="text" onKeyUp={this.search}/>
          <button onClick={this.addNewUser}>Add User</button>
          <div className="flex-item2">
              <table className="Table">
                <thead className="Table-row Table-header">
                  <tr>
                    <th>Sr no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  { (searchKey === undefined || searchKey ==="") ? (userList.map((obj, i) => (<TableRow key={i} data={obj} />))) :  ( (filteredList=== undefined || filteredList.length === 0) ? (<EmptyTableRow msg={EmptyTableMsg}/>) : (filteredList.map((obj, i) => (<TableRow key={i} data={obj} />))) )}                
                </tbody>
              </table>
          </div>
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>  {
    return({

        getAllRecord: (list) => {
            dispatch(GET_ALL(list,[]))
          },

          getFilteredData:(searchKey,list) =>{
            var SearchResult = [];
            if(searchKey.length > 0){
              list.map((obj, i)=> (
                (obj.name.includes(searchKey) === true) ?  SearchResult.push(obj) : ""       
              ));

              dispatch(GET_FILTER_LIST(searchKey,SearchResult));
            }
            else{
              dispatch(GET_ALL(list,[]));
            }
          }
    })
}

const mapStateToProps = (state) =>  {
    return({
        userList:state.users,
        filteredList:state.filteredList,
        searchKey:state.searchKey
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
