import React from 'react';
import { Redirect } from "react-router-dom";
import Header from '../../components/Header';

class AddUser extends React.Component{

    state={
        redirectHomeFlag:false,
        redirectHomeUrl:"/",
    }

    home = () =>{
        this.setState({redirectHomeFlag:true})
    }

    onSubmitForm1 = () =>{
        alert("Data submitted successfully");
        this.setState({redirectHomeFlag:true})
    }
    
    render(){
        if(this.state.redirectHomeFlag){
            return <Redirect to={this.state.redirectHomeUrl}/>;
        }

        return (
            
            <div className = "UserPage">
            <Header />
            <div className = "flex-container">
                <h3>Add New User</h3>
                   <div className="container">
                   <form onSubmit={this.onSubmitForm1}>
                        <div className="row">
                            <div className="col-25">
                                <label>Name</label>
                            </div>
                            <div className="col-75">
                              <input type="text" placeholder="Your name.."  pattern="[a-zA-z_]{1,15}[0-9]*"
                                    title="Name should be in proper format. e.g. test or _test" autofocus required/>
                            </div>
                        </div>                    
                        <div className="row">
                            <div className="col-25">
                                <label>Email</label>
                            </div>
                            <div className="col-75">
                                <input type="email" placeholderValue="Your email.." title="Email should be in proper format. e.g. test@xyz.com" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label >Phone</label>
                            </div>
                            <div className="col-75">
                              <input type="number" placeholderValue="Your phone.." min="9" title="Phone Number length must be greater than or equal to 9" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Address</label>
                            </div>
                            <div className="col-75">
                                <textarea id="address" cols="7" rows="5" placeholder="Enter address.."></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <input type="button" className="btn_home" onClick={this.home} value="Close"/><br/>
                            <input type="submit" value="submit" />                            
                        </div>
                    </form>                    
                  </div>
                
            </div>
      </div>
        );
    }
}

export default AddUser;