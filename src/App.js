import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keyword: '',
			sortBy: 'name',
			sortValue: 1
		}
	}

	onOpenForm = () => {
		this.props.onClearForm();
		this.props.onOpenForm();
	}

	// onFilter = (filterName, filterStatus) => {

	// 	filterStatus = parseInt(filterStatus, 10);

	// 	this.setState({
	// 		filter: {
	// 			name: filterName.toLowerCase(),
	// 			status: filterStatus
	// 		}
	// 	})
	// }

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
    	let { 
    		keyword, 
    		sortBy, 
    		sortValue } = this.state
        let { isDisplayForm } = this.props

   //  	if( filter ) {
   //  		if(filter.name) {
   //  			tasks = tasks.filter((task) => {
   //  				return task.name.toLowerCase().indexOf(filter.name) !== -1;
   //  			})
   //  		}

   //  		tasks = tasks.filter((task) => {
   //  			if(filter.status === -1) {
   //  				return task
   //  			} else {
   //  				return task.status === (filter.status === 1 ? true : false)
   //  			}
   //  		})
   //  	}

   //  	if ( keyword ) {
   //  		tasks = tasks.filter((task) => {
   //  			return task.name.toLowerCase().indexOf(keyword) !== -1;
   //  		})
   //  	}

   //  	if ( sortBy === 'name') {
	  //   	tasks.sort((a,b) => {
	  //   		if (a.name > b.name) return sortValue
	  //   		else if (a.name < b.name) return -sortValue
	  //   		else return 0
	  //   	})
   //  	} else {
			// tasks.sort((a,b) => {
   //  		if (a.status > b.status) return -sortValue
   //  		else if (a.status < b.status) return sortValue
   //  		else return 0
	  //   	})
   //  	}
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
                        <TaskControl
                        	onSearch = { this.onSearch }
                        	sortBy = { sortBy }
                        	sortValue = { sortValue }
                        	onSort = { this.onSort }
                        />
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
