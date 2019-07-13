import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskControlSort extends Component {

    onSort = (sortBy, sortValue) => { 
        let sort = {
            by: sortBy,
            value: sortValue
        }
        this.props.onSort(sort)
    }

    render() {
        const { sort } = this.props

        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick = { () => this.onSort('name', 1) }>
                            <a
                                role="button"
                                className = { sort.by === 'name' && 
                                                sort.value === 1 ? 
                                                'sort_selected' : '' }
                            >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick = { () => this.onSort('name', -1) }>
                            <a
                                role="button"
                                className = { sort.by === 'name' && 
                                                sort.value === -1 ? 
                                                'sort_selected' : '' }
                            >
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick = { () => this.onSort('status', 1) }>
                            <a
                                role="button"
                                className = { sort.by === 'status' && 
                                                sort.value === 1 ? 
                                                'sort_selected' : '' }
                            >
                                Trạng Thái Kích Hoạt
                            </a>
                        </li>
                        <li onClick = { () => this.onSort('status', -1) }>
                            <a
                                role="button"
                                className = { sort.by === 'status' && 
                                                sort.value === -1 ? 
                                                'sort_selected' : '' }
                            >
                                Trạng Thái Ẩn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>	
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sort: state.sort
    }
} 

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortItem(sort));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskControlSort);