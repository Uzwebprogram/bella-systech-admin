import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../utils/api";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const PhotosProductPost = createAsyncThunk("PhotosProduct/post", async (body) => {
  return await axios.post(`${API_URL}/photos`, body , { headers:{ token : cookies.get("token")}}).then((res) => res);
});
export const PhotosProductGet = createAsyncThunk("PhotosProduct/get", async () => {
  return await axios
    .get(`${API_URL}/photos`)
    .then((response) => response.data);
});

export const PhotosProductDelete = createAsyncThunk("PhotosProduct/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/photos/${id}` , { headers:{ token : cookies.get("token")}})
    .then((response) => response.data);
});
export const PhotosProductPut = createAsyncThunk(
  "PhotosProduct/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/Photos/${id}`, body , { headers:{ token : cookies.get("token")}})
      .then((response) => console.log(response.data));
  }
);

export const UploadImagePhoto = createAsyncThunk("Photos/upload", async (e) => {
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
export const UploadImagePhoto2 = createAsyncThunk("Photos/upload2", async (e) => {
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
export const UploadImagePhoto3 = createAsyncThunk("Photos/upload3", async (e) => {
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
export const UploadImagePhoto4 = createAsyncThunk("Photos/Image4upload", async (e) => {
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
const PhotosProductSlice = createSlice({
  name: "PhotosProduct",
  initialState: {
    PhotoProductGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    PhotosProductPost: {
      Success: false,
      Error: false,
      data: [],
      loading: false,
    },
    PhotosProductDelete: {
      Success: false,
      Error: false,
      loading: false,
    },
    PhotosProductPut: {
      Error: false,
      Loading: false,
      Success: false,
    },
    uploadPhotosProduct: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadPhotosProduct2: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadPhotosProduct3: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadPhotosProduct4: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
  },
  extraReducers: {
    // get
    [PhotosProductGet.pending]: (state, action) => {
      state.PhotoProductGet.loading = true;
    },
    [PhotosProductGet.fulfilled]: (state, action) => {
      state.PhotoProductGet.loading = false;
      state.PhotoProductGet.success = true;
      state.PhotoProductGet.data = action.payload;
      state.PhotoProductGet.error = false;
    },
    [PhotosProductGet.rejected]: (state, action) => {
      state.PhotoProductGet.loading = false;
      state.PhotoProductGet.error = true;
      state.PhotoProductGet.success = false;
    },
    // add
    [PhotosProductPost.pending]: (state, action) => {
      state.PhotosProductPost.loading = true;
    },
    [PhotosProductPost.fulfilled]: (state, action) => {
      state.PhotosProductPost.loading = false;
      state.PhotosProductPost.Success = true;
      state.PhotosProductPost.data = action.payload;
      state.PhotosProductPost.Error = false;
    },
    [PhotosProductPost.rejected]: (state, action) => {
      state.PhotosProductPost.loading = false;
      state.PhotosProductPost.Error = true;
      state.PhotosProductPost.Success = false;
    },
    // delete
    [PhotosProductDelete.pending]: (state, action) => {
      state.PhotosProductDelete.loadingDelete = true;
    },
    [PhotosProductDelete.fulfilled]: (state, action) => {
      state.PhotosProductDelete.loading = false;
      state.PhotosProductDelete.Success = true;
      state.PhotosProductDelete.Error = false;
    },
    [PhotosProductDelete.rejected]: (state, action) => {
      state.PhotosProductDelete.loading = false;
      state.PhotosProductDelete.Error = true;
      state.PhotosProductDelete.Success = false;
    },
    // put
    [PhotosProductPut.pending]: (state, action) => {
      state.PhotosProductPut.loading = true;
    },
    [PhotosProductPut.fulfilled]: (state, action) => {
      state.PhotosProductPut.Error = false;
      state.PhotosProductPut.Success = true;
      state.PhotosProductPut.Loading = false;
    },
    [PhotosProductPut.rejected]: (state, action) => {
      state.PhotosProductPut.Error = true;
      state.PhotosProductPut.Success = false;
      state.PhotosProductPut.Loading = false;
    },

    [UploadImagePhoto.pending]: (state, action) => {
      state.uploadPhotosProduct.Loading = true;
    },
    [UploadImagePhoto.fulfilled]: (state, action) => {
      state.uploadPhotosProduct.Error = false;
      state.uploadPhotosProduct.Success = true;
      state.uploadPhotosProduct.Loading = false;
      state.uploadPhotosProduct.data = action.payload;
      // console.log( );
    },
    [UploadImagePhoto.rejected]: (state, action) => {
      state.uploadPhotosProduct.Error = true;
      state.uploadPhotosProduct.Success = false;
      state.uploadPhotosProduct.Loading = false;
    },
    [UploadImagePhoto2.pending]: (state, action) => {
      state.uploadPhotosProduct2.Loading = true;
    },
    [UploadImagePhoto2.fulfilled]: (state, action) => {
      state.uploadPhotosProduct2.Error = false;
      state.uploadPhotosProduct2.Success = true;
      state.uploadPhotosProduct2.Loading = false;
      state.uploadPhotosProduct2.data = action.payload;
      // console.log( );
    },
    [UploadImagePhoto2.rejected]: (state, action) => {
      state.uploadPhotosProduct2.Error = true;
      state.uploadPhotosProduct2.Success = false;
      state.uploadPhotosProduct2.Loading = false;
    },
    [UploadImagePhoto3.pending]: (state, action) => {
      state.uploadPhotosProduct3.Loading = true;
    },
    [UploadImagePhoto3.fulfilled]: (state, action) => {
      state.uploadPhotosProduct3.Error = false;
      state.uploadPhotosProduct3.Success = true;
      state.uploadPhotosProduct3.Loading = false;
      state.uploadPhotosProduct3.data = action.payload;
      // console.log( );
    },
    [UploadImagePhoto3.rejected]: (state, action) => {
      state.uploadPhotosProduct3.Error = true;
      state.uploadPhotosProduct3.Success = false;
      state.uploadPhotosProduct3.Loading = false;
    },
    [UploadImagePhoto4.pending]: (state, action) => {
      state.uploadPhotosProduct4.Loading = true;
    },
    [UploadImagePhoto4.fulfilled]: (state, action) => {
      state.uploadPhotosProduct4.Error = false;
      state.uploadPhotosProduct4.Success = true;
      state.uploadPhotosProduct4.Loading = false;
      state.uploadPhotosProduct4.data = action.payload;
      // console.log( );
    },
    [UploadImagePhoto4.rejected]: (state, action) => {
      state.uploadPhotosProduct4.Error = true;
      state.uploadPhotosProduct4.Success = false;
      state.uploadPhotosProduct4.Loading = false;
    },
  },
});

export const {} = PhotosProductSlice.actions;
export default PhotosProductSlice.reducer;
