import React, { Component } from 'react';
import User from './components/User'
import image from './dummy-user.png'
import './App.css';
//import Itemlist from './components/Itemlist'
import AddItem from './components/AddItem'

class App extends Component {
  state = {
    items:[{image:image,name:'Ring',type:'1',material:'gold'},
           {image:image,name:'Necklace',type:'2',material:'silver'},
           {image:image,name:'Bracelet',type:'3',material:'platinum'}

    ]
  }
  render() {
    var items = this.state.items;
    let lis = []
                for(let i in this.state.items){
                  
                    lis.push(<li key={i}>{this.state.items[i]} <span >x</span></li>)
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
        <ul>{this.lis}</ul>
       

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

}

export default App;
