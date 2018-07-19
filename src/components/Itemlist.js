import React, { Component } from 'react';


export default class Itemlist extends Component{

    render(){



        return(
           
        <li>
          <div className="todo-item">
            <span className="item-name">{this.props.item}</span>
            <span className="item-delete" onClick={this.handleDelete}> x </span>
          </div>
        </li>
           


        );

    }
    handleDelete() {
        this.props.onDelete(this.props.item);
    }
}