import React, { Component } from 'react';
import image from '../dummy-user.png'

export default class Itemlist extends Component{
    state = {
        bool : true
    }
    render(){
        let modal_class = this.state.bool ? "modal" :"modal-active";


        return(
           
            <li  key={this.props.key} className="grid-item">

            <img className="Img" src={`${this.props.item.image}`} alt={image} onClick={this.onclick.bind(this)} />
            
            <div id='myModal' className={modal_class}>
            <div className="modal-content">
            <div className="modal-header">    
            <span className="close" onClick={this.closeonclick.bind(this)}>&times;</span>
                <h2>Item Details</h2>
            </div>
            <div className="modal-body">
                <p><strong>Name:{this.props.item.name}</strong></p>
                <p><strong>Type:{this.props.item.type}</strong></p>
                <p><strong>Material:{this.props.item.material}</strong></p>
            </div>
            <div className="modal-footer">
            <h3>{this.props.item.name}</h3>
            </div>
            </div>
            </div>
            
           
            <div className="container1">
            <p><strong>{this.props.item.name}</strong></p>
        
            </div>
            <span className="close1" onClick={this.props.Delete}>&times;</span>
            
          </li>


        );

    }
    onclick() {
        this.setState({
            bool : !this.state.bool
        })
        /*let modal = document.getElementById(`${this.props.key}`);
        modal.style.display = "block";*/
       
       

    }
    closeonclick(){
        this.setState({
            bool : !this.state.bool
        })
        /*let modal = document.getElementById('myModal');
        modal.style.display = "none";*/
    } 
  
}