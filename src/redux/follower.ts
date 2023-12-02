import { createSlice } from '@reduxjs/toolkit';

interface UserType {
    displayName?: string;
    username?: string;
    contact?: string;
    avatar?: string;
    followers?: string;
    following?: string;
    bio?: string;
    verified?: boolean
}

interface InitialStateType {
    user: UserType,
    users: UserType[]
}

const initialState: InitialStateType = {
    user: {},
    users: []
}

const followerSlice = createSlice({
    name: 'follower',
    initialState,
    reducers: {
        refresh: (state) => {
            state.user = {};
            state.users = [];
        },
        setUsers: (state, action) => {
            state.users = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
});

export const followerReducer = followerSlice.reducer;
export const followerActions = followerSlice.actions;