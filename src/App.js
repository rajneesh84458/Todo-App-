import React from 'react';

import './App.css';

class App extends React.Component {

state={
       newItem:'',
       list :[]
}

addItem(todoValue){
  if(todoValue !== ""){
   const newItem ={
         
    id:Date.now(),
    value:todoValue,
    isDone:false
       }
       console.log(newItem)

  const list =[...this.state.list];
  console.log(list)
  
    list.push(newItem);
    this.setState({
              list:list,
              newItem:''
         })
  }

}

deleteItem(id){
  const list =[...this.state.list];
  const updatedlist =list.filter(item=>item.id !==id)

  this.setState({list:updatedlist})

}
updateInput(e){
 
  this.setState({newItem:e.target.value})

}
  render() {
  return (
    <div className="container">
      <h1>Todo-App</h1>
      
                <input type ="text" className="input-text"
                placeholder="Write an Item...."
                required
                value={this.state.newItem} 
                onChange={ e=> this.updateInput(e)}
                />


                <button className="add-btn"
                onClick={ () => this.addItem(this.state.newItem)}
                        disabled ={!this.state.newItem.length}
                >Add Todo</button>

          <div className="list">
            <ul>
                {this.state.list.map( (item )=>{

                  return(
                        <li key ={item.id}>
                        <input type ="checkbox"
                                name="isDone"
                                checked={item.isDone}
                                onChange={()=>{ }}
                        />
                                    {item.value}
                                    
                                    <button onClick={()=>this.deleteItem(item.id)}>Delete</button>     
                        </li>
                        
                  )
                  
            })}
          
          <li>
            <input type="checkbox"/>
            List of items
            <button>Delete</button>
          </li>
        </ul>

      </div>
      
    </div>
  );
}
}
export default App;
