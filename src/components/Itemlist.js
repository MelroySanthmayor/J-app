import React, { Component } from 'react';
import image from '../dummy-user.png'

export default class Itemlist extends Component{
    state = {
        bool : true,
        editing :true,
        image:this.props.item.image,
        name:this.props.item.name,
        type:this.props.item.type,
        material:this.props.item.material
    }
    render(){
        let modal_class = this.state.bool ? "modal" : "modal-active";
        let edit_class = this.state.editing ? "edit-inactive" : "edit-active";


        return(
           
            <li className="grid-item">

            <img className="Img" src={`${this.state.image}`} alt={image} onClick={this.onclick.bind(this)} />
            
            <div id='myModal' className={modal_class}>
            <div className="modal-content">
            <div className="modal-header">    
            <span className="close" onClick={this.closeonclick.bind(this)}>&times;</span>
                <h2>Item Details</h2>
            </div>
            <div className="modal-body">
                <p><strong>Name:{this.state.name}</strong></p>
                <p><strong>Type:{this.state.type}</strong></p>
                <p><strong>Material:{this.state.material}</strong></p>
            </div>
            <div className="modal-footer">
            <h3>{this.state.name}</h3>
            </div>
            </div>
            </div>


            
            <form id="form"  className={edit_class} onSubmit={this.onSubmit.bind(this)}>

            <div className="form-content">            
    

            <span className="closeEditing" onClick={this.editing.bind(this)}>&times;</span>
            <div className="row">
              <div className="col-20">
                <label>Image</label>
              </div>
              <div className="col-80">
                <input type="text" required ref="UpdateImage" placeholder="Enter the Image address url"/>
              </div>  
            </div>
            <div className="row">
              <div className="col-20">
                <label>Name</label>
              </div>
              <div className="col-80">
                <input type="text" required ref="UpdateName" placeholder="Enter the name of the item" defaultValue={this.state.name}/>
              </div>  
            </div>
            <div className="row">
              <div className="col-20">
                <label>Type</label>
              </div>
              <div className="col-80">
                <input type="text" required ref="UpdateType" placeholder="Enter the type of the item" defaultValue={this.state.type}/>
              </div>  
            </div>
            <div className="row">
              <div className="col-20">
                <label>Material</label>
              </div>
              <div className="col-80">
                <input type="text" required ref="UpdateMaterial" placeholder="Enter the material of the item" defaultValue={this.state.material}/>
               </div>  
            </div>
            <div className="row">
                <input type="submit" value="Update Item" />
            </div>


          </div> 


        </form>
        
           
            <div className="container1">
            <p><strong>{this.state.name}</strong></p>
        
            </div>
            <button className="Edit" onClick={this.editing.bind(this)}>Edit</button>
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
    editing(){
        this.setState({
            editing : !this.state.editing
        })
    }
    onSubmit(e){
        e.preventDefault();

        this.setState({
            editing : !this.state.editing,                          /* Added update handler by changing local state foreach item on edit */
            image:this.refs.UpdateImage.value,
            name:this.refs.UpdateName.value,
            type:this.refs.UpdateType.value,
            material:this.refs.UpdateMaterial.value
        });
        const item = {
            image:this.refs.UpdateImage.value,
            name:this.refs.UpdateName.value,
            type:this.refs.UpdateType.value,
            material:this.refs.UpdateMaterial.value
        }
        this.props.onUpdate(item)
    }
  
}