import { combineReducers } from "redux";
import likeSlice from './likeSlice'

const rootReducer = combineReducers({
    likeSlice: likeSlice.reducer
})

export default rootReducer