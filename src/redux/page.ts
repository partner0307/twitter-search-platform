import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    visible: true,
    title: ''
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        toggleMenu: (state, action) => {
            state.visible = action.payload
        },
        setTitle: (state, action) => {
            state.title = action.payload
        }
    }
});

export const pageReducer = pageSlice.reducer;
export const pageActions = pageSlice.actions;