import { combineReducers } from "redux"

import gags from "./gagsReducer"
import user from "./userReducer"

export default combineReducers({
  gags,
  user,
})
