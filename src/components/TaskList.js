import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        )

        this.setState({
            [name]: value
        })


    }

    render() {



        let { tasks, filter } = this.props;

        if (filter) {
            if ( filter.name) {
                tasks = tasks.filter( task => 
                     task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1 )
            }

            let status = parseInt(filter.status);

            tasks = tasks.filter( task => {
                if (status === -1) 
                    return task
                else 
                    return task.status === (status === 1) ? true : false;
            })
        }

        let elmTasks = tasks.map((task, index) => {
            return <TaskItem 
                        key = { task.id }
                        index = { index }
                        task = { task }
                    />
        })

        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterName"
                                value = {this.state.filterName}
                                onChange = { this.onChange }
                            />
                        </td>
                        <td>
                            <select
                                className="form-control"
                                name="filterStatus"
                                value = {this.state.filterStatus}
                                onChange = { this.onChange }
                            >
                                <option value={-1} >Tất Cả</option>
                                <option value={0} >Ẩn</option>
                                <option value={1} >Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    { elmTasks }
                </tbody>
            </table>
        		
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filter: state.filterItem
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilter: (name, status) => {
            dispatch(actions.fiterItem(name, status));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
