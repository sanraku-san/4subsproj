import {createSlice} from '@reduxjs/toolkit';

const initailState ={
    user:null
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload
        },
        reset:()=> initailState
    }
})
export const {setUser,reset} = authSlice.actions

export default authSlice.reducer;