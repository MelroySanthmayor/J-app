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
        <div className="parallax">
            <div className="card">   
                <img className="Image" src={this.state.image} alt="error"/>
                <div className="container">
                    <h1><strong>{this.state.name}</strong></h1><br/>
                    <strong>Age:{this.state.age}</strong><br/>
                    <strong>Email:{this.state.email}</strong><br/>
                    <strong>Contact.No:{this.state.contact}</strong><br/>
                    <div className="social-media">
                        <a className="a-tag" href="#"><i className="fa fa-twitter"></i></a>  
                        <a className="a-tag" href="#"><i className="fa fa-linkedin"></i></a>  
                        <a className="a-tag" href="#"><i className="fa fa-facebook"></i></a>
                    </div>
                </div>
            </div> 
        </div>    

        );
    }


}