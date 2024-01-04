import { configureStore } from "@reduxjs/toolkit";
import fileEntriesSlice from "./slices/fileEntriesSlice";
import layoutSlice from "./slices/layout";

export const store = configureStore({
    reducer: {
        fileEntries: fileEntriesSlice,
        layout: layoutSlice
    }
})

export type AppDispatch = typeof store.dispatch;