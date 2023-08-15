import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../utils/api";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const ParametrProductPost = createAsyncThunk("ParametrProduct/post", async (body) => {
  return await axios.post(`${API_URL}/parametr`, body , { headers:{ token : cookies.get("token")}}).then((res) => res);
});
export const ParametrProductGet = createAsyncThunk("ParametrProduct/get", async () => {
  return await axios
    .get(`${API_URL}/parametr`)
    .then((response) => response.data);
});

export const ParametrProductDelete = createAsyncThunk("ParametrProduct/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/parametr/${id}` , { headers:{ token : cookies.get("token")}})
    .then((response) => response.data);
});
export const ParametrProductPut = createAsyncThunk(
  "ParametrProduct/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/parametr/${id}`, body , { headers:{ token : cookies.get("token")}})
      .then((response) => console.log(response.data));
  }
);

const ParametrProductSlice = createSlice({
  name: "ParametrProduct",
  initialState: {
    ParametrProductGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    ParametrProductPost: {
      Success: false,
      Error: false,
      data: [],
      loading: false,
    },
    ParametrProductDelete: {
      Success: false,
      Error: false,
      loading: false,
    },
    ParametrProductPut: {
      Error: false,
      Loading: false,
      Success: false,
    },
  },
  extraReducers: {
    // get
    [ParametrProductGet.pending]: (state, action) => {
      state.ParametrProductGet.loading = true;
    },
    [ParametrProductGet.fulfilled]: (state, action) => {
      state.ParametrProductGet.loading = false;
      state.ParametrProductGet.success = true;
      state.ParametrProductGet.data = action.payload;
      state.ParametrProductGet.error = false;
    },
    [ParametrProductGet.rejected]: (state, action) => {
      state.ParametrProductGet.loading = false;
      state.ParametrProductGet.error = true;
      state.ParametrProductGet.success = false;
    },
    // add
    [ParametrProductPost.pending]: (state, action) => {
      state.ParametrProductPost.loading = true;
    },
    [ParametrProductPost.fulfilled]: (state, action) => {
      state.ParametrProductPost.loading = false;
      state.ParametrProductPost.Success = true;
      state.ParametrProductPost.data = action.payload;
      state.ParametrProductPost.Error = false;
    },
    [ParametrProductPost.rejected]: (state, action) => {
      state.ParametrProductPost.loading = false;
      state.ParametrProductPost.Error = true;
      state.ParametrProductPost.Success = false;
    },
    // delete
    [ParametrProductDelete.pending]: (state, action) => {
      state.ParametrProductDelete.loadingDelete = true;
    },
    [ParametrProductDelete.fulfilled]: (state, action) => {
      state.ParametrProductDelete.loading = false;
      state.ParametrProductDelete.Success = true;
      state.ParametrProductDelete.Error = false;
    },
    [ParametrProductDelete.rejected]: (state, action) => {
      state.ParametrProductDelete.loading = false;
      state.ParametrProductDelete.Error = true;
      state.ParametrProductDelete.Success = false;
    },
    // put
    [ParametrProductPut.pending]: (state, action) => {
      state.ParametrProductPut.loading = true;
    },
    [ParametrProductPut.fulfilled]: (state, action) => {
      state.ParametrProductPut.Error = false;
      state.ParametrProductPut.Success = true;
      state.ParametrProductPut.Loading = false;
    },
    [ParametrProductPut.rejected]: (state, action) => {
      state.ParametrProductPut.Error = true;
      state.ParametrProductPut.Success = false;
      state.ParametrProductPut.Loading = false;
    },
  },
});

export const {} = ParametrProductSlice.actions;
export default ParametrProductSlice.reducer;
