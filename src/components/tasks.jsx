import React, { Component } from 'react';
import StickyNotes from './stickyNotes';

class Tasks extends Component {
    state = { 
        tasks:[
            {id:"1",title:"What went well",count:"4"},
            {id:"2",title:"What can be improved",count:"3"},
            {id:"3",title:"Start doing",count:"2"},
            {id:"4",title:"Action items",count:"0"}
        ]
     }
    render() { 
        return ( 
            <div><h2>Retrospective Board</h2>
            <div className="row">                
                {this.state.tasks.map(task=><StickyNotes key={task.id} title={task.title} count={task.count}/>)}                
            </div> </div>
        );
    }
}
 
export default Tasks;