import React, { Component } from 'react';
import image from '../dummy-user.png'

export default class Itemlist extends Component{

    render(){



        return(
           
            <li  key={this.props.key} className="grid-item">

            <div id="myModal" className="modal">
            <div className="modal-content">
            <div className="modal-header">    
            <span className="close" onClick={this.closeonclick}>&times;</span>
               <h2>Item Details</h2>
            </div>
            <div className="modal-body">
              <p>Type:{this.props.item.type}</p>
              <p>Material:{this.props.item.material}</p>
            </div>
            <div className="modal-footer">
            <h3>{this.props.item.name}</h3>
            </div>
            </div>
            </div>

            <img className="Img" src={`${this.props.item.image}`} alt={image} onClick={this.onclick} />

           
           
            <div className="container1">
            <p>{this.props.item.name}</p>
            <p>{this.props.item.material}</p>
            </div>
            <span className="close1" onClick={this.props.Delete}>&times;</span>
            
          </li>


        );

    }
    onclick() {
        let modal = document.getElementById('myModal');
        modal.style.display = "block";

    }
      closeonclick() {
        let modal = document.getElementById('myModal');
        modal.style.display = "none";
    }
  
}