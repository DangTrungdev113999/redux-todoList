import * as types from './../constans/ActionTypes';

const data = JSON.parse(localStorage.getItem('tasks'));
let initialState = data ? data : [];

const s4 = () => {
	return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

const generateID = () => {
	return s4() + s4() + s4() + '-' + s4() + s4() + s4() + 
	s4() + s4() + s4() + '-' + s4() + s4() + s4(); 
}


const findIndex = (tasks, id) => {
    let result = -1;
    tasks.forEach(( task, index ) => {
        if(task.id === id) {
            result = index;
        }
    })
    return result
}

const myReduder = ( state = initialState, action ) => {
	let id = '';
	let index = -1;
	switch(action.type) {
		case types.LIST_ALL:
			return state;
		case types.SAVE_ITEM:

			if (action.task.id) {
				index = findIndex(state, action.task.id);
				console.log(index);
				state[index] = action.task;
			} else {
				const newItem = {
					id: generateID(),
					name: action.task.name,
					status: action.task.status
				}
				state.push(newItem);
			}
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		case types.UPDATE_STATUS_ITEM:
			id = action.id;
			index = findIndex(state, id);
			if( index !== -1) {
				state[index] = {
					...state[index],
					status : !state[index].status
				}
				localStorage.setItem('tasks', JSON.stringify(state));
			}
			return [...state];
		case types.DELETE_ITEM:
			id = action.id;
			index = findIndex(state, id);
			if ( index !== -1) {
				state.splice(index, 1);
				localStorage.setItem('tasks', JSON.stringify(state));
			}
			return [...state]
		default: return state;
	}
}

export default myReduder;
