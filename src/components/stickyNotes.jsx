import React, { Component } from 'react';
import StickyNote from './stickyNote';

class StickyNotes extends Component {

    state = { 
        notes:[
            {id:1,value:'body'},
            {id:2,value:'body'},
            {id:3,value:'body'}
        ]
     }
    render(props) { 
        return ( <div className="col-md-6">
                    <h4>{this.props.title}</h4>
                    <div className="row">
                        { this.state.notes.map(note=><StickyNote key={note.id} />)   }                        
                    </div>
                </div> );
    }
}
 
export default StickyNotes;