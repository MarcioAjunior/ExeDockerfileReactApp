import { combineReducers } from 'redux';
import {peopleReducer} from './reducers/peopleReducer';

const mainReducer = combineReducers({
    peopleReducer : peopleReducer,
})

export default mainReducer;