import React from 'react';
import './AddUser.css';
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
            <div>
                <Header />
                <div className = "AddUser">          
                    <div className = "flex-container">
                        <fieldset>
                            <legend>Add User</legend>
                        <form onSubmit={this.onSubmitForm1}>
                            <div className="row">
                                <div className="col-25">
                                    <label>Name</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" className="inputBox" placeholder="Your name.."  pattern="[a-zA-z_]{1,15}[0-9]*"
                                    title="Name should be in proper format. e.g. test or _test" autofocus required/>
                                </div>
                            </div>                    
                            <div className="row">
                                <div className="col-25">
                                    <label>Email</label>
                                </div>
                                <div className="col-75">
                                    <input type="email" className="inputBox" placeholder="Your email.." title="Email should be in proper format. e.g. test@xyz.com" required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label >Phone</label>
                                </div>
                                <div className="col-75">
                                <input type="number" className="inputBox" placeholder="Your phone.." min="9" title="Phone Number length must be greater than or equal to 9" required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label>Address</label>
                                </div>
                                <div className="col-75">
                                    <textarea id="address" cols="30" rows="7" placeholder="Your address.."></textarea>
                                </div>
                            </div>
                            <div className="row btn__position">
                                <input type="button" className="btn_home" onClick={this.home} value="Close"/><br/>
                                <input type="submit" className="submit" value="Submit" />  
                                
                                                          
                            </div>
                        </form>    
                        </fieldset>                                
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser;