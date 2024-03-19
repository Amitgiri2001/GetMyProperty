import { configureStore } from '@reduxjs/toolkit'

import ProfileSlice from "./ProfileSlice"
export default configureStore({
    reducer: {
        Profile: ProfileSlice,
    },
})