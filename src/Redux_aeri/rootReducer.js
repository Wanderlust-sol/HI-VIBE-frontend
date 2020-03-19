import { combineReducers } from "redux";
import songList from "Redux_aeri/Reducers/songList";

const rootReducer = combineReducers({
    songList,
});

export default rootReducer;