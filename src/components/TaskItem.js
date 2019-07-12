import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {

    onUpdateStatus = () => {
        const { task } = this.props;
        this.props.onUpdateStatus(task.id);
    }

    onDelete = () => {
        const { task } = this.props;
        this.props.onDeleteItem( task.id );
        this.props.onCloseForm();
    }

    onEditItem = () => {
        const { task } = this.props;
        this.props.onOpenForm();
        this.props.onEditItem(task);
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
                        onClick={ this.onEditItem}>
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

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatusItem(id));
        },
        onDeleteItem: (id) => {
            dispatch(actions.deleteItem(id));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onEditItem: task => {
            dispatch(actions.editItem(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
