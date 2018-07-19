import React,{ Component }from 'react';



export default class AddItem extends Component{

    render(){

        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
            <input type="text" required ref="NewItem"/>
            <input type="submit" value="Hit me" />
        </form>
        );
    }
     //custom functions
     handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.refs.NewItem.value);
        e.target.reset();
     }

}