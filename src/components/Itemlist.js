import React, { Component } from 'react';


export default class Itemlist extends Component{

    render(){



        return(
           
            <li  className="grid-item">
                    
            <img className="Img" src={this.props.image} alt="error" onClick={this.onclick} />
            <div id="myModal" className="modal">
            <div className="modal-content">
            <div className="modal-header">    
            <span className="close" onClick={this.closeonclick}>&times;</span>
               <h2>Item Details</h2>
            </div>
            <div className="modal-body">
              <p>Type:{this.props.type}</p>
              <p>Material:{this.props.material}</p>
            </div>
            <div className="modal-footer">
            <h3>{this.props.name}</h3>
            </div>
            </div>
            </div>
           
            <div className="container1">
            {this.props.name}
            </div>
            <span className="close1" onClick={this.props.Delete}>&times;</span>
            
          </li>


        );

    }
    onclick(i) {
        let modal = document.getElementById('myModal');
        modal.style.display = "block";
    }
      closeonclick() {
        let modal = document.getElementById('myModal');
        modal.style.display = "none";
    }
  
}