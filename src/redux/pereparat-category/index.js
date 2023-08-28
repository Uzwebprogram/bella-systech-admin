import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const PereparatCategoryPost = createAsyncThunk("PereparatCategory/post", async (body) => {
  return await axios.post(`${API_URL}/category_pereparat`, body , { headers:{ token : cookies.get("token")}}).then((res) => res);
});
export const PereparatCategoryGet = createAsyncThunk("PereparatCategory/get", async () => {
  return await axios
    .get(`${API_URL}/category_pereparat`)
    .then((response) => response.data);
});

export const PereparatCategoryDelete = createAsyncThunk("PereparatCategory/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/category_pereparat/${id}` , { headers:{ token : cookies.get("token")}})
    .then((response) => response.data);
});
export const PereparatCategoryPut = createAsyncThunk(
  "PereparatCategory/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/category_pereparat/${id}`, body , { headers:{ token : cookies.get("token")}})
      .then((response) => console.log(response.data));
  }
);

export const UploadImage = createAsyncThunk("PereparatCategory/upload", async (e) => {
  const formData = new FormData();
  formData.append("file", e.target.files[0]);
  formData.append("upload_preset", "v0khd47o");
  try {
    return await axios
      .post("https://api.cloudinary.com/v1_1/dsdkp3672/upload", formData)
      .then((response) => response?.data.secure_url);
  } catch (error) {
    return error;
  }
});
const PereparatCategorySlice = createSlice({
  name: "PereparatCategory",
  initialState: {
    PereparatCategoryGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    PereparatCategoryPost: {
      Success: false,
      Error: false,
      loading: false,
    },
    PereparatCategoryDelete: {
      Success: false,
      Error: false,
      loading: false,
    },
    PereparatCategoryPut: {
      Error: false,
      Loading: false,
      Success: false,
    },
    uploadPereparatCategory: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
  },
  extraReducers: {
    // get
    [PereparatCategoryGet.pending]: (state, action) => {
      state.PereparatCategoryGet.loading = true;
    },
    [PereparatCategoryGet.fulfilled]: (state, action) => {
      state.PereparatCategoryGet.loading = false;
      state.PereparatCategoryGet.success = true;
      state.PereparatCategoryGet.data = action.payload;
      state.PereparatCategoryGet.error = false;
    },
    [PereparatCategoryGet.rejected]: (state, action) => {
      state.PereparatCategoryGet.loading = false;
      state.PereparatCategoryGet.error = true;
      state.PereparatCategoryGet.success = false;
    },
    // add
    [PereparatCategoryPost.pending]: (state, action) => {
      state.PereparatCategoryPost.loading = true;
    },
    [PereparatCategoryPost.fulfilled]: (state, action) => {
      state.PereparatCategoryPost.loading = false;
      state.PereparatCategoryPost.Success = true;
      state.PereparatCategoryPost.Error = false;
    },
    [PereparatCategoryPost.rejected]: (state, action) => {
      state.PereparatCategoryPost.loading = false;
      state.PereparatCategoryPost.Error = true;
      state.PereparatCategoryPost.Success = false;
    },
    // delete
    [PereparatCategoryDelete.pending]: (state, action) => {
      state.PereparatCategoryDelete.loadingDelete = true;
    },
    [PereparatCategoryDelete.fulfilled]: (state, action) => {
      state.PereparatCategoryDelete.loading = false;
      state.PereparatCategoryDelete.Success = true;
      state.PereparatCategoryDelete.Error = false;
    },
    [PereparatCategoryDelete.rejected]: (state, action) => {
      state.PereparatCategoryDelete.loading = false;
      state.PereparatCategoryDelete.Error = true;
      state.PereparatCategoryDelete.Success = false;
    },
    // put
    [PereparatCategoryPut.pending]: (state, action) => {
      state.PereparatCategoryPut.loading = true;
    },
    [PereparatCategoryPut.fulfilled]: (state, action) => {
      state.PereparatCategoryPut.Error = false;
      state.PereparatCategoryPut.Success = true;
      state.PereparatCategoryPut.Loading = false;
    },
    [PereparatCategoryPut.rejected]: (state, action) => {
      state.PereparatCategoryPut.Error = true;
      state.PereparatCategoryPut.Success = false;
      state.PereparatCategoryPut.Loading = false;
    },

    [UploadImage.pending]: (state, action) => {
      state.uploadPereparatCategory.Loading = true;
    },
    [UploadImage.fulfilled]: (state, action) => {
      state.uploadPereparatCategory.Error = false;
      state.uploadPereparatCategory.Success = true;
      state.uploadPereparatCategory.Loading = false;
      state.uploadPereparatCategory.data = action.payload;
      // console.log( );
    },
    [UploadImage.rejected]: (state, action) => {
      state.uploadPereparatCategory.Error = true;
      state.uploadPereparatCategory.Success = false;
      state.uploadPereparatCategory.Loading = false;
    },
  },
});

export const {} = PereparatCategorySlice.actions;
export default PereparatCategorySlice.reducer;
