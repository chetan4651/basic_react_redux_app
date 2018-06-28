import React, { Component } from 'react';
import './CommentList.css';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import axios from 'axios';
import {GET_ALL_COMMENTS} from '../../actions';
import CommentTableRow from '../../components/CommentTableRow';
import EmptyTableRow from '../../components/EmptyTableRow';
import { Redirect } from "react-router-dom";
import ReactPaginate from 'react-paginate';

class CommentList extends Component {

  state={
    redirectFlag : false,
    redirectUrl:"",
    totalCnt:0,
    pageCount:10
  }

  componentDidMount(){
    this.getUsers(0)
  }

  getUsers = (offset=0) =>{
      axios.get("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        if(this.state.totalCnt == 0){
          const len = res.data.length/this.state.pageCount;
          this.setState({totalCnt:len});
        }

       this.props.getAllComments(res.data,offset)
    }).catch((err)=>{
        console.log("My error :: "+JSON.stringify(err));
    }); 
     
  }

  handlePageClick = (data) => {    
    var selectedOffset = data.selected;
    this.getUsers(selectedOffset*this.state.pageCount);
  };
 
  home = () =>{
    this.setState({redirectFlag:true, redirectUrl:"/"});
  }

  render() {
    const {CommentList,commentFilterdList} = this.props;
    const EmptyTableMsg = "Comments Not Found";

    
    if(this.state.redirectFlag){
      return <Redirect to={this.state.redirectUrl}/>;
    }

    return (
      <div>
        <div>
        <Header/>
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={this.state.totalCnt} //{this.state.pageCount}
                       marginPagesDisplayed={3}
                       pageRangeDisplayed={1}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
        </div>
        <div>
            <div className = "MainPage">
            <div className="flex-container">
              <div className="flex-item1">                
                <button onClick={this.home}>Home</button>
              </div>
              <div className="flex-item2">
                <table className="Table">
                  <thead >
                    <tr>
                      <th>Sr No</th>
                      <th>Post Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Body</th>
                    </tr>
                  </thead>
                  <tbody>
                    { (CommentList.length > 0) ?  CommentList.map((obj, i) => (<CommentTableRow key={i} data={obj} />)) : (<EmptyTableRow msg={EmptyTableMsg}/>) }            
                  </tbody>
                </table>
              </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>  {
  return({

      getAllComments: (list,offset) => {
          var newList = [];
         
          var cnt=0;
          for(var k=offset;k<list.length;k++){
            if(cnt < 10){
              newList.push(list[k]);
            }

            cnt++;
          }
          dispatch(GET_ALL_COMMENTS(newList));
        }
  })
}

const mapStateToProps = (state) =>  {
  return({
      CommentList:state.CommentList
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentList);