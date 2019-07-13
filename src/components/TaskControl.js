import React, { Component } from 'react';
import TaskControlSearch from './TaskControlSearch';
import TaskControlSort from './TaskControlSort';

class TaskControl extends Component {

    render() {
        return (
            <div className="row mt-15">
                {/*search*/}
                <TaskControlSearch />
                {/*sort*/}
                <TaskControlSort />
            </div>
        		
        )
    }
}

export default TaskControl;
