import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
	onOpenForm = () => {
		this.props.onClearForm();
		this.props.onOpenForm();
	}

	onSearch = (keyword) => {
		if (keyword) {
			this.setState({
				keyword: keyword.toLowerCase()
			})
		}
	}

	onSort = (sortBy, sortValue) => {
		if(sortBy && sortValue) {
			this.setState({
				sortBy: sortBy,
				sortValue: sortValue
			})
		}  
	}

    render() {
        let { isDisplayForm } = this.props


        return (
        	<div className="container">
        		<div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr/>
                </div>
                <div className="row">
                    <div 
                    	className= { isDisplayForm ? 
                    				'col-xs-12 col-sm-12 col-md-4 col-lg-4' : 
                    				'' }>
                    	{/*form*/}
                    	<TaskForm />

                    </div>
                    <div 
                    	className= { isDisplayForm ? 
                    				'col-xs-12 col-sm-12 col-md-8 col-lg-8' : 
                    				'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>

                        <button 
	                        type="button" 
	                        className="btn btn-primary"
	                        onClick={ this.onOpenForm }>
                            <span className="fa fa-plus mr-5"></span>
                            Thêm Công Việc
                        </button>

                        {/*search - sort*/}
                        <TaskControl />
			            <div className="row mt-15">
			                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			                	<TaskList/>
			                </div>
			            </div>
                    </div>
                </div>
            </div>
        		
        )
    }
}

const mapStatetoProps = state => {
	return {
		isDisplayForm: state.isDisplayForm
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onOpenForm: () => {
			dispatch(actions.openForm());
		},
		onClearForm: () => {
			dispatch(actions.clearForm());
		}
	}
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
