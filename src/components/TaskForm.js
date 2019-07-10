import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }
    }

    componentWillMount() {
        const { task } = this.props;
        // console.log(task)
        if (task) {

            this.setState({
                id:  task.id,
                name:  task.name,
                status:  task.status
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if( nextProps && nextProps.task ) {
            const { task } = nextProps
            this.setState({
                id:  task.id,
                name:  task.name,
                status:  task.status
            })
        } else if ( !nextProps.task ) {
            this.setState({
                id: '',
                name: '',
                status: false
            })
        }
    }



    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onSubmit = (event) => {
        event.preventDefault();

        // this.props.onSubmit(this.state);
        this.props.onAddTask(this.state);

        this.onClear();
        this.onCloseForm();
    }

    onChange = (event) => {
        const target = event.target;
        let value = target.value;
        let name = target.name;
        if(name === 'status') {
            value = (target.value ) ? true : false;
        }

        this.setState({
            [name] : value
        })
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }

    render() {
        const { id } = this.state;
        return (
			<div className={ id !== '' ? "panel panel-warning" : "panel panel-primary" }>
                <div className="panel-heading">
                    <h3 className="panel-title">
                       { id !== '' ? "Cập nhật công việc" : "Thêm công việc" }
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={ this.onCloseForm }
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={ this.onSubmit }>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                value={ this.state.name }
                                name="name"
                                onChange={ this.onChange }
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            className="form-control"
                            value={ this.state.status}
                            name="status"
                            onChange={ this.onChange }
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select><br/>
                        <div className="text-center">
                            <button 
                            type="submit" 
                            className="btn btn-warning"
                            onSubmit={ this.onSubmit }>
                                <span className="fa fa-plus mr-5"></span>Lưu Lại
                            </button>&nbsp;
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={ this.onClear }>
                                <span  className="fa fa-close mr-5"></span>Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
			</div>
        		
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: task => {
             dispatch(actions.addTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(TaskForm);
