import React, { Component } from 'react';
import User from './components/User'
import image from './dummy-user.png'
import bracelet from './bracelet.jpg'
import necklace from './necklace.jpg'
import ring from './ring.jpg'
import './App.css';

import Itemlist from './components/Itemlist'
import AddItem from './components/AddItem'

class App extends Component {
  
  state = {
    items:[{image:ring,name:'Ring',type:'1',material:'gold'},
           {image:necklace,name:'Necklace',type:'2',material:'silver'},
           {image:bracelet,name:'Bracelet',type:'3',material:'platinum'},
           {image:bracelet,name:'Bracelet',type:'3',material:'platinum'},
           {image:ring,name:'Ring',type:'3',material:'platinum'}

    ]
  }
  render() {
    
    var items = this.state.items;
    let that = this;
            let  lis = items.map(function(item,i){
                  return(
                    <Itemlist key={i} index={i} 
                    image={item.image} 
                    name={item.name} 
                    type={item.type} 
                    material={item.material}
                    Delete={that.onDelete.bind(that, i)}/>
               // Use Bucky method
                    
                  )
                  

                });
                
    /*items = items.map(
      function(item, index) 
      {
        return <Itemlist item={item} key={index} onDelete={this.onDelete} />;
      }.bind(this)
    );*/
    return (
      <div className="App">
      <nav>
        <header id="header">Jewellery Collection</header>
      </nav>
        <User/>
        <div >
          <strong><h2>User Jewellry Collection</h2></strong>
          <ul className="grid-container">{lis}</ul>
          
        </div>

      </div>
    );
  }
  //Custom Functions  <AddItem onAdd={this.onAdd}/>
  onDelete(i,e) {
    const items = Object.assign([],this.state.items);
    items.splice(i,1);
    this.setState({items:items})


    /*var i = this.state.items.indexOf(item);
    
    this.state.items.splice(i,1);*/

  }
  /*onAdd(item){
      var updateditems = this.state.items
      updateditems.push(item);
      this.setState({
          //items: updatedtodos
          items : [...updateditems,
          {image:image,name:'Ring',type:'1',material:'gold'}]// trying to render one static addition of the input
      })

  }*/
  
  onclick() {
    let modal = document.getElementById('myModal');
    modal.style.display = "block";
}
  closeonclick() {
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
}


}

export default App;
