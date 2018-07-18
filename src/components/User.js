import React, { Component } from 'react';
import image from '../dummy-user.png'
import '../App.css';


export default class User extends Component{
    state = {
          image:image,
          name:"Karthik",
          age:30,
          email:"Karthik@123yahoo.com",
          contact:9982486791
        
      }
    render(){
        
        return(
            <div>
            <div className="card">   
                <img className="Image" src={this.state.image} alt="error"/>
                <div className="container">
                <strong>Name:{this.state.name}</strong><br/>
                <strong>Age:{this.state.age}</strong><br/>
                <strong>Email:{this.state.email}</strong><br/>
                <strong>Contact.No:{this.state.contact}</strong><br/>
                </div>
            </div> 
            </div>

        );
    }


}