
import React, { Component } from 'react';

class StickyNote extends Component {
    state = {  }
    render() { 
        return <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            Card Content
                        </div>
                        <div className="card-footer">
                            Card footer
                        </div>
                    </div>
                </div> ;       
    }
}
 
export default StickyNote;