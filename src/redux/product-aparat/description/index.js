import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../utils/api";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const DescriptionProductPost = createAsyncThunk("DescriptionProduct/post", async (body) => {
  return await axios.post(`${API_URL}/descriptions`, body , { headers:{ token : cookies.get("token")}}).then((res) => res);
});
export const DescriptionProductGet = createAsyncThunk("DescriptionProduct/get", async () => {
  return await axios
    .get(`${API_URL}/descriptions`)
    .then((response) => response.data);
});

export const DescriptionProductDelete = createAsyncThunk("DescriptionProduct/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/descriptions/${id}` , { headers:{ token : cookies.get("token")}})
    .then((response) => response.data);
});
export const DescriptionProductPut = createAsyncThunk(
  "DescriptionProduct/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/descriptions/${id}`, body , { headers:{ token : cookies.get("token")}})
      .then((response) => console.log(response.data));
  }
);

const DescriptionProductSlice = createSlice({
  name: "DescriptionProduct",
  initialState: {
    DescriptionProductGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    DescriptionProductPost: {
      Success: false,
      Error: false,
      data: [],
      loading: false,
    },
    DescriptionProductDelete: {
      Success: false,
      Error: false,
      loading: false,
    },
    DescriptionProductPut: {
      Error: false,
      Loading: false,
      Success: false,
    },
  },
  extraReducers: {
    // get
    [DescriptionProductGet.pending]: (state, action) => {
      state.DescriptionProductGet.loading = true;
    },
    [DescriptionProductGet.fulfilled]: (state, action) => {
      state.DescriptionProductGet.loading = false;
      state.DescriptionProductGet.success = true;
      state.DescriptionProductGet.data = action.payload;
      state.DescriptionProductGet.error = false;
    },
    [DescriptionProductGet.rejected]: (state, action) => {
      state.DescriptionProductGet.loading = false;
      state.DescriptionProductGet.error = true;
      state.DescriptionProductGet.success = false;
    },
    // add
    [DescriptionProductPost.pending]: (state, action) => {
      state.DescriptionProductPost.loading = true;
    },
    [DescriptionProductPost.fulfilled]: (state, action) => {
      state.DescriptionProductPost.loading = false;
      state.DescriptionProductPost.Success = true;
      state.DescriptionProductPost.data = action.payload;
      state.DescriptionProductPost.Error = false;
    },
    [DescriptionProductPost.rejected]: (state, action) => {
      state.DescriptionProductPost.loading = false;
      state.DescriptionProductPost.Error = true;
      state.DescriptionProductPost.Success = false;
    },
    // delete
    [DescriptionProductDelete.pending]: (state, action) => {
      state.DescriptionProductDelete.loadingDelete = true;
    },
    [DescriptionProductDelete.fulfilled]: (state, action) => {
      state.DescriptionProductDelete.loading = false;
      state.DescriptionProductDelete.Success = true;
      state.DescriptionProductDelete.Error = false;
    },
    [DescriptionProductDelete.rejected]: (state, action) => {
      state.DescriptionProductDelete.loading = false;
      state.DescriptionProductDelete.Error = true;
      state.DescriptionProductDelete.Success = false;
    },
    // put
    [DescriptionProductPut.pending]: (state, action) => {
      state.DescriptionProductPut.loading = true;
    },
    [DescriptionProductPut.fulfilled]: (state, action) => {
      state.DescriptionProductPut.Error = false;
      state.DescriptionProductPut.Success = true;
      state.DescriptionProductPut.Loading = false;
    },
    [DescriptionProductPut.rejected]: (state, action) => {
      state.DescriptionProductPut.Error = true;
      state.DescriptionProductPut.Success = false;
      state.DescriptionProductPut.Loading = false;
    },
  },
});

export const {} = DescriptionProductSlice.actions;
export default DescriptionProductSlice.reducer;
