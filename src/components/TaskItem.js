import React, { Component } from 'react';

class TaskItem extends Component {

    onUpdateStatus = () => {
        const { task } = this.props;
        this.props.onUpdateStatus( task.id );
    }

    onDelete = () => {
        const { task } = this.props;
        this.props.onDelete( task.id );
    }

    onUpdate = () => {
        const { task } = this.props;
        this.props.onUpdate( task.id );
    }

    render() {
        const { task, index } = this.props;
        return (
            <tr>
                <td>{ index + 1 }</td>
                <td> { task.name } </td>
                <td className="text-center">
                    <span 
                        className={ task.status ? 'label label-success' : 'label label-danger' }
                        onClick= { this.onUpdateStatus }
                    >
                        { task.status ? "kích hoạt" : "ẩn" }
                    </span>
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={ this.onUpdate}>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button
                        type="button" 
                        className="btn btn-danger"
                        onClick={ this.onDelete }>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        		
        )
    }
}

export default TaskItem;
