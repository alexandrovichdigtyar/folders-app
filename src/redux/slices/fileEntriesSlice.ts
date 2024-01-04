import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FormatedFileEntry } from "../../types/types";
import { fetchFileEntities } from "../asyncThunks/filesThunk";
import { FileEntriesState } from "../types";


const initialState: FileEntriesState = {
    entries: null,
    selectedEntry: null,
    isLoading: false,
    errorMessage: null,
}
export const fileEntriesSlice = createSlice({
    name: "files",
    initialState,
    reducers: {
        setSelectedEntry: (state, { payload }: PayloadAction<FormatedFileEntry | null>) => {
            state.selectedEntry = payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchFileEntities.fulfilled, (state, { payload }) => {
            state.entries = payload;
            state.isLoading = false;
        }),
            builder.addCase(fetchFileEntities.pending, (state) => {
                state.isLoading = true;
            }),
            builder.addCase(fetchFileEntities.rejected, (state) => {
                state.isLoading = false;
            })
    }
});

export const { setSelectedEntry } = fileEntriesSlice.actions;

export default fileEntriesSlice.reducer;