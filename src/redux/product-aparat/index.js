import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const AparatProductPost = createAsyncThunk("AparatProduct/post", async (body) => {
  return await axios.post(`${API_URL}/aparat`, body , { headers:{ token : cookies.get("token")}}).then((res) => res);
});
export const AparatProductGet = createAsyncThunk("AparatProduct/get", async () => {
  return await axios
    .get(`${API_URL}/aparat`)
    .then((response) => response.data);
});

export const AparatProductDelete = createAsyncThunk("AparatProduct/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/aparat/${id}` , { headers:{ token : cookies.get("token")}})
    .then((response) => response.data);
});
export const AparatProductPut = createAsyncThunk(
  "AparatProduct/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/aparat/${id}`, body , { headers:{ token : cookies.get("token")}})
      .then((response) => console.log(response.data));
  }
);

export const UploadImage = createAsyncThunk("AparatProduct/upload", async (e) => {
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
export const UploadImage2 = createAsyncThunk("Aparat/upload2", async (e) => {
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
export const UploadImage3 = createAsyncThunk("Aparat/upload3", async (e) => {
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
export const UploadPdf = createAsyncThunk("Aparat/pdfupload", async (e) => {
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
const AparatProductSlice = createSlice({
  name: "AparatProduct",
  initialState: {
    AparatProductGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    AparatProductPost: {
      Success: false,
      Error: false,
      data: [],
      loading: false,
    },
    AparatProductDelete: {
      Success: false,
      Error: false,
      loading: false,
    },
    AparatProductPut: {
      Error: false,
      Loading: false,
      Success: false,
    },
    uploadAparatProduct: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadAparatProduct2: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadAparatProduct3: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadAparatProductPdf: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
  },
  extraReducers: {
    // get
    [AparatProductGet.pending]: (state, action) => {
      state.AparatProductGet.loading = true;
    },
    [AparatProductGet.fulfilled]: (state, action) => {
      state.AparatProductGet.loading = false;
      state.AparatProductGet.success = true;
      state.AparatProductGet.data = action.payload;
      state.AparatProductGet.error = false;
    },
    [AparatProductGet.rejected]: (state, action) => {
      state.AparatProductGet.loading = false;
      state.AparatProductGet.error = true;
      state.AparatProductGet.success = false;
    },
    // add
    [AparatProductPost.pending]: (state, action) => {
      state.AparatProductPost.loading = true;
    },
    [AparatProductPost.fulfilled]: (state, action) => {
      state.AparatProductPost.loading = false;
      state.AparatProductPost.Success = true;
      state.AparatProductPost.data = action.payload;
      state.AparatProductPost.Error = false;
    },
    [AparatProductPost.rejected]: (state, action) => {
      state.AparatProductPost.loading = false;
      state.AparatProductPost.Error = true;
      state.AparatProductPost.Success = false;
    },
    // delete
    [AparatProductDelete.pending]: (state, action) => {
      state.AparatProductDelete.loadingDelete = true;
    },
    [AparatProductDelete.fulfilled]: (state, action) => {
      state.AparatProductDelete.loading = false;
      state.AparatProductDelete.Success = true;
      state.AparatProductDelete.Error = false;
    },
    [AparatProductDelete.rejected]: (state, action) => {
      state.AparatProductDelete.loading = false;
      state.AparatProductDelete.Error = true;
      state.AparatProductDelete.Success = false;
    },
    // put
    [AparatProductPut.pending]: (state, action) => {
      state.AparatProductPut.loading = true;
    },
    [AparatProductPut.fulfilled]: (state, action) => {
      state.AparatProductPut.Error = false;
      state.AparatProductPut.Success = true;
      state.AparatProductPut.Loading = false;
    },
    [AparatProductPut.rejected]: (state, action) => {
      state.AparatProductPut.Error = true;
      state.AparatProductPut.Success = false;
      state.AparatProductPut.Loading = false;
    },

    [UploadImage.pending]: (state, action) => {
      state.uploadAparatProduct.Loading = true;
    },
    [UploadImage.fulfilled]: (state, action) => {
      state.uploadAparatProduct.Error = false;
      state.uploadAparatProduct.Success = true;
      state.uploadAparatProduct.Loading = false;
      state.uploadAparatProduct.data = action.payload;
      // console.log( );
    },
    [UploadImage.rejected]: (state, action) => {
      state.uploadAparatProduct.Error = true;
      state.uploadAparatProduct.Success = false;
      state.uploadAparatProduct.Loading = false;
    },
    [UploadImage2.pending]: (state, action) => {
      state.uploadAparatProduct2.Loading = true;
    },
    [UploadImage2.fulfilled]: (state, action) => {
      state.uploadAparatProduct2.Error = false;
      state.uploadAparatProduct2.Success = true;
      state.uploadAparatProduct2.Loading = false;
      state.uploadAparatProduct2.data = action.payload;
      // console.log( );
    },
    [UploadImage2.rejected]: (state, action) => {
      state.uploadAparatProduct2.Error = true;
      state.uploadAparatProduct2.Success = false;
      state.uploadAparatProduct2.Loading = false;
    },
    [UploadImage3.pending]: (state, action) => {
      state.uploadAparatProduct3.Loading = true;
    },
    [UploadImage3.fulfilled]: (state, action) => {
      state.uploadAparatProduct3.Error = false;
      state.uploadAparatProduct3.Success = true;
      state.uploadAparatProduct3.Loading = false;
      state.uploadAparatProduct3.data = action.payload;
      // console.log( );
    },
    [UploadImage3.rejected]: (state, action) => {
      state.uploadAparatProduct3.Error = true;
      state.uploadAparatProduct3.Success = false;
      state.uploadAparatProduct3.Loading = false;
    },
    [UploadPdf.pending]: (state, action) => {
      state.uploadAparatProductPdf.Loading = true;
    },
    [UploadPdf.fulfilled]: (state, action) => {
      state.uploadAparatProductPdf.Error = false;
      state.uploadAparatProductPdf.Success = true;
      state.uploadAparatProductPdf.Loading = false;
      state.uploadAparatProductPdf.data = action.payload;
      // console.log( );
    },
    [UploadPdf.rejected]: (state, action) => {
      state.uploadAparatProductPdf.Error = true;
      state.uploadAparatProductPdf.Success = false;
      state.uploadAparatProductPdf.Loading = false;
    },
  },
});

export const {} = AparatProductSlice.actions;
export default AparatProductSlice.reducer;
