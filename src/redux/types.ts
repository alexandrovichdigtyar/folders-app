import { FormatedFileEntry } from "../types/types";

export interface FileEntriesState {
    entries: null | FormatedFileEntry[];
    selectedEntry: null | FormatedFileEntry;
    isLoading: boolean;
    errorMessage: null | string;
}

export interface layoutState {
    notificationMessage: null | string;
}

export interface AppState {
    fileEntries: FileEntriesState;
    layout: layoutState;
}