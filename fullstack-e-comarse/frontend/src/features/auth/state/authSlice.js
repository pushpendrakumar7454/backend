import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
   name:"auth",
   initialState:{
    users:[],
    isLoading:false
   },
   reducers:{
    addUser:(state,action)=>{
        state.users=action.payload
        state.isLoading=false;
    },
    removeUser:(state)=>{
        state.users=null
        state.isLoading=false
    }
   }
})

export const {addUser,removeUser}=authSlice.actions
export default authSlice.reducer