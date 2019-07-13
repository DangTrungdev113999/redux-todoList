import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskControlSearch extends Component {
    constructor() {
        super();
        this.state = {
            keyword : ''
        }
    }

    onChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value
        })
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    }

    render() {


        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa..."
                        name="keyword"
                        value = { this.state.keyword }
                        onChange = { this.onChange }
                    />
                    <span className="input-group-btn">
                        <button 
                            className="btn btn-primary" 
                            type="button"
                            onClick = { this.onSearch }>
                            <span className="fa fa-search mr-5"></span>Tìm
                        </button>
                    </span>
                </div>
            </div>	
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (keyword) => {
            dispatch(actions.searchItem(keyword));
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskControlSearch);
