import { createSlice } from "@reduxjs/toolkit"

const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        name: '',
        email: "",
        mobileNumber: "",
        gender: "",
        agent: "",

    },
    reducers: {
        updateProfile: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.mobileNumber = action.payload.mobileNumber;
            state.gender = action.payload.gender;
            state.agent = action.payload.agent;

        }

    }
});


export const { updateProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;