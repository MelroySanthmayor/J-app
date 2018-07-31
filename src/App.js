import React, { Component } from 'react';
import User from './components/User'
import image from './dummy-user.png'
import bracelet from './bracelet.jpg'
import necklace from './necklace.jpg'
import ring from './ring.jpg'
import './App.css';
import Edit from './components/Edit'
import Itemlist from './components/Itemlist'


class App extends Component {
  
  state = {
    items:[{image:ring,name:'Ring',type:'1',material:'gold'},
           {image:necklace,name:'Necklace',type:'2',material:'gold'},
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
                    item={item} 
                    onUpdate={that.onUpdate.bind(that, i)}
                    Delete={that.onDelete.bind(that, i)}/>
               
                    
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
        <a href="#Items">User Items</a>
        <a href="#Additem">Add Items</a>
      </nav>
        <User/>  
        <a className="nav" name="Items"></a>
        <ul className="grid-container">{lis}</ul>
        <a className="nav" name="Additem"></a>
        <div className="form-container">
            <form id="form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="row">
              <div className="col-20">
                <label>Image</label>
              </div>
              <div className="col-80">
                <input type="text" required ref="NewImage" placeholder="Enter the Image address url"/>
              </div>  
            </div>
            <div className="row">
              <div className="col-20">
                <label>Name</label>
              </div>
              <div className="col-80">
                <input type="text" required ref="NewName" placeholder="Enter the name of the item"/>
              </div>  
            </div>
            <div className="row">
              <div className="col-20">
                <label>Type</label>
              </div>
              <div className="col-80">
                <input type="text" required ref="NewType" placeholder="Enter the type of the item"/>
              </div>  
            </div>
            <div className="row">
              <div className="col-20">
                <label>Material</label>
              </div>
              <div className="col-80">
                <input type="text" required ref="NewMaterial" placeholder="Enter the material of the item"/>
               </div>  
            </div>
            <div className="row">
                <input type="submit" value="Add Item" />
            </div>
        </form>
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
  onUpdate(Item,i,e){

    //const index = this.state.items.findIndex((item)=>{
    //  return items[i]===item;
    //});

    const item = Object.assign({},this.state.items[i]);
    
    const items = Object.assign([],this.state.items)
    items[i] = Item;
    this.setState({
      items:items
    })

  }
  handleSubmit(e){
    e.preventDefault();
    const items = Object.assign([],this.state.items);
    this.setState({
       items : [...items,
                {image:this.refs.NewImage.value,
                  name:this.refs.NewName.value,
                  type:this.refs.NewType.value,
                  material:this.refs.NewMaterial.value
                }

      ]
    })
    e.target.reset();
  }
}

export default App;
