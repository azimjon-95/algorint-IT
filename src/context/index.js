import { combineReducers } from "redux"

import MsgOpen from './reducer/Msg'


const rootReducer = combineReducers({
    water: () => "Redux water",
    MsgOpen,

})

export default rootReducer