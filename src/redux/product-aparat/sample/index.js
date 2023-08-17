import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../utils/api";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const SampleProductPost = createAsyncThunk("SampleProduct/post", async (body) => {
  return await axios.post(`${API_URL}/sample`, body , { headers:{ token : cookies.get("token")}}).then((res) => res);
});
export const SampleProductGet = createAsyncThunk("SampleProduct/get", async () => {
  return await axios
    .get(`${API_URL}/sample`)
    .then((response) => response.data);
});

export const SampleProductDelete = createAsyncThunk("SampleProduct/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/sample/${id}` , { headers:{ token : cookies.get("token")}})
    .then((response) => response.data);
});
export const SampleProductPut = createAsyncThunk(
  "SampleProduct/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/sample/${id}`, body , { headers:{ token : cookies.get("token")}})
      .then((response) => console.log(response.data));
  }
);

const SampleProductSlice = createSlice({
  name: "SampleProduct",
  initialState: {
    SampleProductGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    SampleProductPost: {
      Success: false,
      Error: false,
      data: [],
      loading: false,
    },
    SampleProductDelete: {
      Success: false,
      Error: false,
      loading: false,
    },
    SampleProductPut: {
      Error: false,
      Loading: false,
      Success: false,
    },
  },
  extraReducers: {
    // get
    [SampleProductGet.pending]: (state, action) => {
      state.SampleProductGet.loading = true;
    },
    [SampleProductGet.fulfilled]: (state, action) => {
      state.SampleProductGet.loading = false;
      state.SampleProductGet.success = true;
      state.SampleProductGet.data = action.payload;
      state.SampleProductGet.error = false;
    },
    [SampleProductGet.rejected]: (state, action) => {
      state.SampleProductGet.loading = false;
      state.SampleProductGet.error = true;
      state.SampleProductGet.success = false;
    },
    // add
    [SampleProductPost.pending]: (state, action) => {
      state.SampleProductPost.loading = true;
    },
    [SampleProductPost.fulfilled]: (state, action) => {
      state.SampleProductPost.loading = false;
      state.SampleProductPost.Success = true;
      state.SampleProductPost.data = action.payload;
      state.SampleProductPost.Error = false;
    },
    [SampleProductPost.rejected]: (state, action) => {
      state.SampleProductPost.loading = false;
      state.SampleProductPost.Error = true;
      state.SampleProductPost.Success = false;
    },
    // delete
    [SampleProductDelete.pending]: (state, action) => {
      state.SampleProductDelete.loadingDelete = true;
    },
    [SampleProductDelete.fulfilled]: (state, action) => {
      state.SampleProductDelete.loading = false;
      state.SampleProductDelete.Success = true;
      state.SampleProductDelete.Error = false;
    },
    [SampleProductDelete.rejected]: (state, action) => {
      state.SampleProductDelete.loading = false;
      state.SampleProductDelete.Error = true;
      state.SampleProductDelete.Success = false;
    },
    // put
    [SampleProductPut.pending]: (state, action) => {
      state.SampleProductPut.loading = true;
    },
    [SampleProductPut.fulfilled]: (state, action) => {
      state.SampleProductPut.Error = false;
      state.SampleProductPut.Success = true;
      state.SampleProductPut.Loading = false;
    },
    [SampleProductPut.rejected]: (state, action) => {
      state.SampleProductPut.Error = true;
      state.SampleProductPut.Success = false;
      state.SampleProductPut.Loading = false;
    },
  },
});

export const {} = SampleProductSlice.actions;
export default SampleProductSlice.reducer;
