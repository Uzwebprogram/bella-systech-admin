import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const PereparatPost = createAsyncThunk("Pereparat/post", async (body) => {
  return await axios.post(`${API_URL}/pereparat`, body , { headers:{ token : cookies.get("token")}}).then((res) => res);
});
export const PereparatGet = createAsyncThunk("Pereparat/get", async () => {
  return await axios
    .get(`${API_URL}/pereparat`)
    .then((response) => response.data);
});

export const PereparatDelete = createAsyncThunk("Pereparat/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/pereparat/${id}` , { headers:{ token : cookies.get("token")}})
    .then((response) => response.data);
});
export const PereparatPut = createAsyncThunk(
  "Pereparat/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/pereparat/${id}`, body , { headers:{ token : cookies.get("token")}})
      .then((response) => console.log(response.data));
  }
);

export const UploadImage = createAsyncThunk("Pereparat/upload", async (e) => {
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
const PereparatSlice = createSlice({
  name: "Pereparat",
  initialState: {
    PereparatGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    PereparatPost: {
      Success: false,
      Error: false,
      data: [],
      loading: false,
    },
    PereparatDelete: {
      Success: false,
      Error: false,
      loading: false,
    },
    PereparatPut: {
      Error: false,
      Loading: false,
      Success: false,
    },
    uploadPereparat: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadPereparat2: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadPereparat3: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadPereparatPdf: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
  },
  extraReducers: {
    // get
    [PereparatGet.pending]: (state, action) => {
      state.PereparatGet.loading = true;
    },
    [PereparatGet.fulfilled]: (state, action) => {
      state.PereparatGet.loading = false;
      state.PereparatGet.success = true;
      state.PereparatGet.data = action.payload;
      state.PereparatGet.error = false;
    },
    [PereparatGet.rejected]: (state, action) => {
      state.PereparatGet.loading = false;
      state.PereparatGet.error = true;
      state.PereparatGet.success = false;
    },
    // add
    [PereparatPost.pending]: (state, action) => {
      state.PereparatPost.loading = true;
    },
    [PereparatPost.fulfilled]: (state, action) => {
      state.PereparatPost.loading = false;
      state.PereparatPost.Success = true;
      state.PereparatPost.data = action.payload;
      state.PereparatPost.Error = false;
    },
    [PereparatPost.rejected]: (state, action) => {
      state.PereparatPost.loading = false;
      state.PereparatPost.Error = true;
      state.PereparatPost.Success = false;
    },
    // delete
    [PereparatDelete.pending]: (state, action) => {
      state.PereparatDelete.loadingDelete = true;
    },
    [PereparatDelete.fulfilled]: (state, action) => {
      state.PereparatDelete.loading = false;
      state.PereparatDelete.Success = true;
      state.PereparatDelete.Error = false;
    },
    [PereparatDelete.rejected]: (state, action) => {
      state.PereparatDelete.loading = false;
      state.PereparatDelete.Error = true;
      state.PereparatDelete.Success = false;
    },
    // put
    [PereparatPut.pending]: (state, action) => {
      state.PereparatPut.loading = true;
    },
    [PereparatPut.fulfilled]: (state, action) => {
      state.PereparatPut.Error = false;
      state.PereparatPut.Success = true;
      state.PereparatPut.Loading = false;
    },
    [PereparatPut.rejected]: (state, action) => {
      state.PereparatPut.Error = true;
      state.PereparatPut.Success = false;
      state.PereparatPut.Loading = false;
    },

    [UploadImage.pending]: (state, action) => {
      state.uploadPereparat.Loading = true;
    },
    [UploadImage.fulfilled]: (state, action) => {
      state.uploadPereparat.Error = false;
      state.uploadPereparat.Success = true;
      state.uploadPereparat.Loading = false;
      state.uploadPereparat.data = action.payload;
      // console.log( );
    },
    [UploadImage.rejected]: (state, action) => {
      state.uploadPereparat.Error = true;
      state.uploadPereparat.Success = false;
      state.uploadPereparat.Loading = false;
    },
    [UploadImage2.pending]: (state, action) => {
      state.uploadPereparat2.Loading = true;
    },
    [UploadImage2.fulfilled]: (state, action) => {
      state.uploadPereparat2.Error = false;
      state.uploadPereparat2.Success = true;
      state.uploadPereparat2.Loading = false;
      state.uploadPereparat2.data = action.payload;
      // console.log( );
    },
    [UploadImage2.rejected]: (state, action) => {
      state.uploadPereparat2.Error = true;
      state.uploadPereparat2.Success = false;
      state.uploadPereparat2.Loading = false;
    },
    [UploadImage3.pending]: (state, action) => {
      state.uploadPereparat3.Loading = true;
    },
    [UploadImage3.fulfilled]: (state, action) => {
      state.uploadPereparat3.Error = false;
      state.uploadPereparat3.Success = true;
      state.uploadPereparat3.Loading = false;
      state.uploadPereparat3.data = action.payload;
      // console.log( );
    },
    [UploadImage3.rejected]: (state, action) => {
      state.uploadPereparat3.Error = true;
      state.uploadPereparat3.Success = false;
      state.uploadPereparat3.Loading = false;
    },
    [UploadPdf.pending]: (state, action) => {
      state.uploadPereparatPdf.Loading = true;
    },
    [UploadPdf.fulfilled]: (state, action) => {
      state.uploadPereparatPdf.Error = false;
      state.uploadPereparatPdf.Success = true;
      state.uploadPereparatPdf.Loading = false;
      state.uploadPereparatPdf.data = action.payload;
      // console.log( );
    },
    [UploadPdf.rejected]: (state, action) => {
      state.uploadPereparatPdf.Error = true;
      state.uploadPereparatPdf.Success = false;
      state.uploadPereparatPdf.Loading = false;
    },
  },
});

export const {} = PereparatSlice.actions;
export default PereparatSlice.reducer;
