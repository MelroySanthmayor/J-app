import React, { Component } from 'react';


export default class Itemlist extends Component{

    render(){



        return(
           
            <li  className="grid-item">
                    
            <img className="Img" src={this.props.image} alt="error" />
            <div id="myModal" class="modal">
            <div class="modal-content">
            <div class="modal-header">    
            <span class="close">&times;</span>
               <h2>Item Details</h2>
            </div>
            <div class="modal-body">
              <p>Type:{this.props.type}</p>
              <p>Material:{this.props.material}</p>
            </div>
            <div class="modal-footer">
            <h3>{this.props.name}</h3>
            </div>
            </div>
            </div>
            <div className="container1">
            {this.props.name}
            </div>
            <span class="close1" onClick={this.props.Delete}>&times;</span>
            
          </li>


        );

    }
  
}