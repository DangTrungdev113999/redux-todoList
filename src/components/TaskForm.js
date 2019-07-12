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




    onCloseForm = () => {
        this.props.onCloseForm();
    }

    componentWillReceiveProps(nextProps) {
        if( nextProps && nextProps.task ) {
            const { task } = nextProps
            this.setState({
                id:  task.id,
                name:  task.name,
                status:  task.status
            })
        } 
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

    onSaveItem = (event) => {
        event.preventDefault();
        this.props.onSaveItem(this.state);


        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }

    render() {
        let { isDisplayForm } = this.props;
        let { id } = this.props.task;
        if ( !isDisplayForm ) return '';
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
                    <form onSubmit={ this.onSaveItem }>
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
                            value={ this.state.status }
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
                            onSubmit={ this.onSaveItem }>
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
        isDisplayForm: state.isDisplayForm,
        task: state.itemEditting
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveItem: task => {
             dispatch(actions.saveItem(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(TaskForm);
