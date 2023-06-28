import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: false,
        currentUser: {}
    },
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        setUser: (state, action) => {
            state.currentUser = action.payload;
        }
    }
});

export const { setIsAuth, setUser } = userSlice.actions;
export default userSlice.reducer;

