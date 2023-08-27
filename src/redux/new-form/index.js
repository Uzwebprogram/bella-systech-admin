import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";

export const GetNewForm = createAsyncThunk("Form/get", async () => {
  return await axios.get(`${API_URL}/news_form`).then((response) => response.data);
});
export const PostNewForm = createAsyncThunk("Form/post", async (body) => {
  return await axios.post(`${API_URL}/news_form`, body).then((res) => res);
});
export const DeleteNewForm = createAsyncThunk("category/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/news_form/${id}`)
    .then((response) => response.data);
});

const NewFormSlice = createSlice({
  name: "Form",
  initialState: {
    getNewForm: {
      Error: false,
      Loading: false,
      Success: false,
      Data: [],
    },
    postNewForm: {
      Error: false,
      Loading: false,
      Success: false,
    },
    deleteNewForm: {
      Success: false,
      Error: false,
      loading: false,
    },
  },
  extraReducers: {
    [GetNewForm.pending]: (state, action) => {
      state.getNewForm.loading = true;
    },
    [GetNewForm.fulfilled]: (state, action) => {
      state.getNewForm.Error = false;
      state.getNewForm.Success = true;
      state.getNewForm.Loading = false;
      state.getNewForm.Data = action.payload;
    },
    [GetNewForm.rejected]: (state, action) => {
      state.getNewForm.Error = true;
      state.getNewForm.Success = false;
      state.getNewForm.Loading = false;
      state.getNewForm.Data = [];
    },
    [PostNewForm.pending]: (state, action) => {
      state.postNewForm.loading = true;
    },
    [PostNewForm.fulfilled]: (state, action) => {
      state.postNewForm.Error = false;
      state.postNewForm.Success = true;
      state.postNewForm.Loading = false;
    },
    [PostNewForm.rejected]: (state, action) => {
      state.postNewForm.Error = true;
      state.postNewForm.Success = false;
      state.postNewForm.Loading = false;
    },
    // delete
    [DeleteNewForm.pending]: (state, action) => {
      state.deleteNewForm.loadingDelete = true;
    },
    [DeleteNewForm.fulfilled]: (state, action) => {
      state.deleteNewForm.loading = false;
      state.deleteNewForm.Success = true;
      state.deleteNewForm.Error = false;
    },
    [DeleteNewForm.rejected]: (state, action) => {
      state.deleteNewForm.loading = false;
      state.deleteNewForm.Error = true;
      state.deleteNewForm.Success = false;
    },
  },
});

export const {} = NewFormSlice.actions;
export default NewFormSlice.reducer;
