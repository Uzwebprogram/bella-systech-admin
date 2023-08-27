import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const SertificatPost = createAsyncThunk("Sertificat/post", async (body) => {
  return await axios.post(`${API_URL}/sertificat`, body , { headers:{ token : cookies.get("token")}}).then((res) => res);
});
export const SertificatGet = createAsyncThunk("Sertificat/get", async () => {
  return await axios
    .get(`${API_URL}/sertificat`)
    .then((response) => response.data);
});

export const SertificatDelete = createAsyncThunk("Sertificat/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/sertificat/${id}` , { headers:{ token : cookies.get("token")}})
    .then((response) => response.data);
});
export const SertificatPut = createAsyncThunk(
  "Sertificat/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/sertificat/${id}`, body , { headers:{ token : cookies.get("token")}})
      .then((response) => console.log(response.data));
  }
);

export const UploadImage = createAsyncThunk("Sertificat/upload", async (e) => {
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
const SertificatSlice = createSlice({
  name: "Sertificat",
  initialState: {
    SertificatGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    SertificatPost: {
      Success: false,
      Error: false,
      loading: false,
    },
    SertificatDelete: {
      Success: false,
      Error: false,
      loading: false,
    },
    SertificatPut: {
      Error: false,
      Loading: false,
      Success: false,
    },
    uploadSertificat: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
  },
  extraReducers: {
    // get
    [SertificatGet.pending]: (state, action) => {
      state.SertificatGet.loading = true;
    },
    [SertificatGet.fulfilled]: (state, action) => {
      state.SertificatGet.loading = false;
      state.SertificatGet.success = true;
      state.SertificatGet.data = action.payload;
      state.SertificatGet.error = false;
    },
    [SertificatGet.rejected]: (state, action) => {
      state.SertificatGet.loading = false;
      state.SertificatGet.error = true;
      state.SertificatGet.success = false;
    },
    // add
    [SertificatPost.pending]: (state, action) => {
      state.SertificatPost.loading = true;
    },
    [SertificatPost.fulfilled]: (state, action) => {
      state.SertificatPost.loading = false;
      state.SertificatPost.Success = true;
      state.SertificatPost.Error = false;
    },
    [SertificatPost.rejected]: (state, action) => {
      state.SertificatPost.loading = false;
      state.SertificatPost.Error = true;
      state.SertificatPost.Success = false;
    },
    // delete
    [SertificatDelete.pending]: (state, action) => {
      state.SertificatDelete.loadingDelete = true;
    },
    [SertificatDelete.fulfilled]: (state, action) => {
      state.SertificatDelete.loading = false;
      state.SertificatDelete.Success = true;
      state.SertificatDelete.Error = false;
    },
    [SertificatDelete.rejected]: (state, action) => {
      state.SertificatDelete.loading = false;
      state.SertificatDelete.Error = true;
      state.SertificatDelete.Success = false;
    },
    // put
    [SertificatPut.pending]: (state, action) => {
      state.SertificatPut.loading = true;
    },
    [SertificatPut.fulfilled]: (state, action) => {
      state.SertificatPut.Error = false;
      state.SertificatPut.Success = true;
      state.SertificatPut.Loading = false;
    },
    [SertificatPut.rejected]: (state, action) => {
      state.SertificatPut.Error = true;
      state.SertificatPut.Success = false;
      state.SertificatPut.Loading = false;
    },

    [UploadImage.pending]: (state, action) => {
      state.uploadSertificat.Loading = true;
    },
    [UploadImage.fulfilled]: (state, action) => {
      state.uploadSertificat.Error = false;
      state.uploadSertificat.Success = true;
      state.uploadSertificat.Loading = false;
      state.uploadSertificat.data = action.payload;
      // console.log( );
    },
    [UploadImage.rejected]: (state, action) => {
      state.uploadSertificat.Error = true;
      state.uploadSertificat.Success = false;
      state.uploadSertificat.Loading = false;
    },
  },
});

export const {} = SertificatSlice.actions;
export default SertificatSlice.reducer;
