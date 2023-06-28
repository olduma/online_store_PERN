import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./UserSlice";
import deviceSlice from "./DeviceSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        device: deviceSlice
    }
});

export default store;
