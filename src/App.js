import React, { Component } from 'react';
import User from './components/User'
import image from './dummy-user.png'
import bracelet from './bracelet.jpg'
import necklace from './necklace.jpg'
import ring from './ring.jpg'
import './App.css';
//import Itemlist from './components/Itemlist'
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
    let lis = []
                for(let i in items){
                  
                    lis.push(<li key={i} className="grid-item">
                    
                      <img className="Img" src={items[i].image} alt="error" onClick={this.onclick}/>
                      <div className="container1">
                      {items[i].name}
                      </div>
                      <span class="close1">&times;</span>
                      <div id="myModal" class="modal">
                      <div class="modal-content">
                      <div class="modal-header">    
                      <span class="close" onCilck={this.closeonclick}>&times;</span>
                         <h2>Item Details</h2>
                      </div>
                      <div class="modal-body">
                        <p>{items[i].type}</p>
                        <p>{items[i].material}</p>
                      </div>
                      <div class="modal-footer">
                      <h3>{items[i].name}</h3>
                      </div>
                      </div>
                      </div>
                      </li>)// Use Bucky method
                    
                  }
                
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
  onDelete(item,key) {
    var i = this.state.items.indexOf(item);
    
    this.state.items.splice(i,1);

  }
  onAdd(item){
      var updateditems = this.state.items
      updateditems.push(item);
      this.setState({
          //items: updatedtodos
          items : [...updateditems,
          {image:image,name:'Ring',type:'1',material:'gold'}]// trying to render one static addition of the input
      })

  }
  
  onclick = function() {
    let modal = document.getElementById('myModal');
    modal.style.display = "block";
}
  closeonclick = function() {
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
}


}

export default App;
