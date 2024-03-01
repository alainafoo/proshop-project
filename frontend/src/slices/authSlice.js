import { createSlice } from '@reduxjs/toolkit';

const initalState = {
    userInfo: localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo')) : null,
    
};


const authSlice = createSlice({
    name: 'auth',
    initialState: initalState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.clear();
        },
    },
});

export default authSlice.reducer;
export const { setCredentials, logout } = authSlice.actions;
