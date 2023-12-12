import React from "react";

export default class ToDoItem extends React.Component {
    render(){
        let {e,idx,updateItem,deleteitem} = this.props;
        return (
            <div key={idx}>
            <input type="text" value={e} onChange={(event)=>{
              updateItem(event.target.value,idx)
            }} />
            <button style={{backgroundColor : 'rgba(204, 42, 42, 0.86)'}} onClick={()=>{
              deleteitem(idx)
            }}>Delete</button>
            </div>
        )
    }
}