import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const PartnersPost = createAsyncThunk("Partners/post", async (body) => {
  return await axios.post(`${API_URL}/partners`, body , { headers:{ token : cookies.get("token")}}).then((res) => res);
});
export const PartnersGet = createAsyncThunk("Partners/get", async () => {
  return await axios
    .get(`${API_URL}/partners`)
    .then((response) => response.data);
});

export const PartnersDelete = createAsyncThunk("Partners/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/partners/${id}` , { headers:{ token : cookies.get("token")}})
    .then((response) => response.data);
});
export const PartnersPut = createAsyncThunk(
  "Partners/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/partners/${id}`, body , { headers:{ token : cookies.get("token")}})
      .then((response) => console.log(response.data));
  }
);

export const UploadImage1 = createAsyncThunk("Partners/upload1", async (e) => {
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

export const UploadImage2 = createAsyncThunk("Partners/upload2", async (e) => {
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

export const UploadImage3 = createAsyncThunk("Partners/upload3", async (e) => {
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

export const UploadLogo = createAsyncThunk("Partners/uploadLogo", async (e) => {
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

const PartnersSlice = createSlice({
  name: "Partners",
  initialState: {
    PartnersGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    PartnersPost: {
      Success: false,
      Error: false,
      loading: false,
    },
    PartnersDelete: {
      Success: false,
      Error: false,
      loading: false,
    },
    PartnersPut: {
      Error: false,
      Loading: false,
      Success: false,
    },
    uploadImage1: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadImage2: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadImage3: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadLogo: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
  },
  extraReducers: {
    // get
    [PartnersGet.pending]: (state, action) => {
      state.PartnersGet.loading = true;
    },
    [PartnersGet.fulfilled]: (state, action) => {
      state.PartnersGet.loading = false;
      state.PartnersGet.success = true;
      state.PartnersGet.data = action.payload;
      state.PartnersGet.error = false;
    },
    [PartnersGet.rejected]: (state, action) => {
      state.PartnersGet.loading = false;
      state.PartnersGet.error = true;
      state.PartnersGet.success = false;
    },
    // add
    [PartnersPost.pending]: (state, action) => {
      state.PartnersPost.loading = true;
    },
    [PartnersPost.fulfilled]: (state, action) => {
      state.PartnersPost.loading = false;
      state.PartnersPost.Success = true;
      state.PartnersPost.Error = false;
    },
    [PartnersPost.rejected]: (state, action) => {
      state.PartnersPost.loading = false;
      state.PartnersPost.Error = true;
      state.PartnersPost.Success = false;
    },
    // delete
    [PartnersDelete.pending]: (state, action) => {
      state.PartnersDelete.loadingDelete = true;
    },
    [PartnersDelete.fulfilled]: (state, action) => {
      state.PartnersDelete.loading = false;
      state.PartnersDelete.Success = true;
      state.PartnersDelete.Error = false;
    },
    [PartnersDelete.rejected]: (state, action) => {
      state.PartnersDelete.loading = false;
      state.PartnersDelete.Error = true;
      state.PartnersDelete.Success = false;
    },
    // put
    [PartnersPut.pending]: (state, action) => {
      state.PartnersPut.loading = true;
    },
    [PartnersPut.fulfilled]: (state, action) => {
      state.PartnersPut.Error = false;
      state.PartnersPut.Success = true;
      state.PartnersPut.Loading = false;
    },
    [PartnersPut.rejected]: (state, action) => {
      state.PartnersPut.Error = true;
      state.PartnersPut.Success = false;
      state.PartnersPut.Loading = false;
    },

    [UploadImage1.pending]: (state, action) => {
      state.uploadImage1.Loading = true;
    },
    [UploadImage1.fulfilled]: (state, action) => {
      state.uploadImage1.Error = false;
      state.uploadImage1.Success = true;
      state.uploadImage1.Loading = false;
      state.uploadImage1.data = action.payload;
    },
    [UploadImage1.rejected]: (state, action) => {
      state.uploadImage1.Error = true;
      state.uploadImage1.Success = false;
      state.uploadImage1.Loading = false;
    },

    [UploadImage2.pending]: (state, action) => {
      state.uploadImage2.Loading = true;
    },
    [UploadImage2.fulfilled]: (state, action) => {
      state.uploadImage2.Error = false;
      state.uploadImage2.Success = true;
      state.uploadImage2.Loading = false;
      state.uploadImage2.data = action.payload;
    },
    [UploadImage2.rejected]: (state, action) => {
      state.uploadImage2.Error = true;
      state.uploadImage2.Success = false;
      state.uploadImage2.Loading = false;
    },

    [UploadImage3.pending]: (state, action) => {
      state.uploadImage3.Loading = true;
    },
    [UploadImage3.fulfilled]: (state, action) => {
      state.uploadImage3.Error = false;
      state.uploadImage3.Success = true;
      state.uploadImage3.Loading = false;
      state.uploadImage3.data = action.payload;
    },
    [UploadImage3.rejected]: (state, action) => {
      state.uploadImage3.Error = true;
      state.uploadImage3.Success = false;
      state.uploadImage3.Loading = false;
    },

    [UploadLogo.pending]: (state, action) => {
      state.uploadLogo.Loading = true;
    },
    [UploadLogo.fulfilled]: (state, action) => {
      state.uploadLogo.Error = false;
      state.uploadLogo.Success = true;
      state.uploadLogo.Loading = false;
      state.uploadLogo.data = action.payload;
    },
    [UploadLogo.rejected]: (state, action) => {
      state.uploadLogo.Error = true;
      state.uploadLogo.Success = false;
      state.uploadLogo.Loading = false;
    },
  },
});

export const {} = PartnersSlice.actions;
export default PartnersSlice.reducer;
