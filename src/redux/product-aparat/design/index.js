import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../utils/api";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const DesignProductPost = createAsyncThunk("DesignProduct/post", async (body) => {
  return await axios.post(`${API_URL}/design`, body , { headers:{ token : cookies.get("token")}}).then((res) => res);
});
export const DesignProductGet = createAsyncThunk("DesignProduct/get", async () => {
  return await axios
    .get(`${API_URL}/design`)
    .then((response) => response.data);
});

export const DesignProductDelete = createAsyncThunk("DesignProduct/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/design/${id}` , { headers:{ token : cookies.get("token")}})
    .then((response) => response.data);
});
export const DesignProductPut = createAsyncThunk(
  "DesignProduct/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/design/${id}`, body , { headers:{ token : cookies.get("token")}})
      .then((response) => console.log(response.data));
  }
);

export const UploadImageDesign = createAsyncThunk("Design/upload", async (e) => {
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
export const UploadImageDesign2 = createAsyncThunk("Design/upload2", async (e) => {
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

const DesignProductSlice = createSlice({
  name: "DesignProduct",
  initialState: {
    DesignProductGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    DesignProductPost: {
      Success: false,
      Error: false,
      data: [],
      loading: false,
    },
    DesignProductDelete: {
      Success: false,
      Error: false,
      loading: false,
    },
    DesignProductPut: {
      Error: false,
      Loading: false,
      Success: false,
    },
    uploadDesignProduct: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadDesignProduct2: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
  },
  extraReducers: {
    // get
    [DesignProductGet.pending]: (state, action) => {
      state.DesignProductGet.loading = true;
    },
    [DesignProductGet.fulfilled]: (state, action) => {
      state.DesignProductGet.loading = false;
      state.DesignProductGet.success = true;
      state.DesignProductGet.data = action.payload;
      state.DesignProductGet.error = false;
    },
    [DesignProductGet.rejected]: (state, action) => {
      state.DesignProductGet.loading = false;
      state.DesignProductGet.error = true;
      state.DesignProductGet.success = false;
    },
    // add
    [DesignProductPost.pending]: (state, action) => {
      state.DesignProductPost.loading = true;
    },
    [DesignProductPost.fulfilled]: (state, action) => {
      state.DesignProductPost.loading = false;
      state.DesignProductPost.Success = true;
      state.DesignProductPost.data = action.payload;
      state.DesignProductPost.Error = false;
    },
    [DesignProductPost.rejected]: (state, action) => {
      state.DesignProductPost.loading = false;
      state.DesignProductPost.Error = true;
      state.DesignProductPost.Success = false;
    },
    // delete
    [DesignProductDelete.pending]: (state, action) => {
      state.DesignProductDelete.loadingDelete = true;
    },
    [DesignProductDelete.fulfilled]: (state, action) => {
      state.DesignProductDelete.loading = false;
      state.DesignProductDelete.Success = true;
      state.DesignProductDelete.Error = false;
    },
    [DesignProductDelete.rejected]: (state, action) => {
      state.DesignProductDelete.loading = false;
      state.DesignProductDelete.Error = true;
      state.DesignProductDelete.Success = false;
    },
    // put
    [DesignProductPut.pending]: (state, action) => {
      state.DesignProductPut.loading = true;
    },
    [DesignProductPut.fulfilled]: (state, action) => {
      state.DesignProductPut.Error = false;
      state.DesignProductPut.Success = true;
      state.DesignProductPut.Loading = false;
    },
    [DesignProductPut.rejected]: (state, action) => {
      state.DesignProductPut.Error = true;
      state.DesignProductPut.Success = false;
      state.DesignProductPut.Loading = false;
    },

    [UploadImageDesign.pending]: (state, action) => {
      state.uploadDesignProduct.Loading = true;
    },
    [UploadImageDesign.fulfilled]: (state, action) => {
      state.uploadDesignProduct.Error = false;
      state.uploadDesignProduct.Success = true;
      state.uploadDesignProduct.Loading = false;
      state.uploadDesignProduct.data = action.payload;
      // console.log( );
    },
    [UploadImageDesign.rejected]: (state, action) => {
      state.uploadDesignProduct.Error = true;
      state.uploadDesignProduct.Success = false;
      state.uploadDesignProduct.Loading = false;
    },
    [UploadImageDesign2.pending]: (state, action) => {
      state.uploadDesignProduct2.Loading = true;
    },
    [UploadImageDesign2.fulfilled]: (state, action) => {
      state.uploadDesignProduct2.Error = false;
      state.uploadDesignProduct2.Success = true;
      state.uploadDesignProduct2.Loading = false;
      state.uploadDesignProduct2.data = action.payload;
      // console.log( );
    },
    [UploadImageDesign2.rejected]: (state, action) => {
      state.uploadDesignProduct2.Error = true;
      state.uploadDesignProduct2.Success = false;
      state.uploadDesignProduct2.Loading = false;
    }
  },
});

export const {} = DesignProductSlice.actions;
export default DesignProductSlice.reducer;
