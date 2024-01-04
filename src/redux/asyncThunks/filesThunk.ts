import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getFormatedFileEntriesList } from "../../helpers";
import { ServerError } from "../../types/types";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const getErrorMessage = (error: unknown) => {
  let message: string;

  if (error instanceof ServerError) { message = error.message; }
  else { message = String(error); }

  return message;
};

export const fetchFileEntities = createAsyncThunk(
  'files/fetchFileEntities',
  async (path: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}/2/files/list_folder`, {
        path: path,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return getFormatedFileEntriesList(response.data.entries);
    } catch (error: unknown) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const deleteFileEntity = createAsyncThunk(
  'files/deleteFileEntity',
  async (path: string, { rejectWithValue }) => {
    try {
      await axios.post(
        `${apiUrl}/2/files/delete_v2`,
        {
          path: path
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (error: unknown) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
)
