import { createReducer } from "@reduxjs/toolkit";
import user_action from "../actions/user";
const { read_user } = user_action

const initial_state = {
    user: []
}

const user_reducer = createReducer(
    initial_state,
    build=> build.addCase(
        read_user.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user
            }
            return new_state
        }
    )
)

export default user_reducer