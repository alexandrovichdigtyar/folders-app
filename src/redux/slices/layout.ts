import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { layoutState } from "../types";

const initialState: layoutState = {
    notificationMessage: null,
}

export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        setNotificationMessage: (state, action: PayloadAction<string | null>) => {
            state.notificationMessage = action.payload;
        },
    }
})

export const { setNotificationMessage } = layoutSlice.actions;

export default layoutSlice.reducer;