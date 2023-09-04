import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl";

const read_user = createAsyncThunk(
    'read_user',
    async()=> {
        try {
            let user = await axios(apiUrl+'user')
            console.log(user);
            return {
                user: user.data.response
            }
            
        } catch (error) {
            console.log(error);
            return {
                user: []
            }
        }
    }
)

const user_action = { read_user }
export default user_action