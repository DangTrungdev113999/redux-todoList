import React, { Component } from 'react';
import TaskControlSearch from './TaskControlSearch';
import TaskControlSort from './TaskControlSort';

class TaskControl extends Component {

    render() {
        const { onSearch, sortBy, sortValue, onSort } = this.props
        return (
            <div className="row mt-15">
                {/*search*/}
                <TaskControlSearch 
                    onSearch = { onSearch }

                />
                {/*sort*/}
                <TaskControlSort
                    sortBy = { sortBy }
                    sortValue = { sortValue }
                    onSort = { onSort }
                 />
            </div>
        		
        )
    }
}

export default TaskControl;
