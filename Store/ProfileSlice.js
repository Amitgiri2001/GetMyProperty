import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        name: '',
        email: '',
        mobileNumber: '',
        gender: '',
        agent: '',
    },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;
        },
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        updateMobileNumber: (state, action) => {
            state.mobileNumber = action.payload;
        },
        updateGender: (state, action) => {
            state.gender = action.payload;
        },
        updateAgent: (state, action) => {
            state.agent = action.payload;
        },
    }
});

export const { updateName, updateEmail, updateMobileNumber, updateGender, updateAgent } = ProfileSlice.actions;
export default ProfileSlice.reducer;
