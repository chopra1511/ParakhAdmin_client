import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const base_URL = "https://parakhadmin-server.onrender.com";
// const base_URL = "http://localhost:3000";

export const addProducts = createAsyncThunk(
  "products/addProducts",
  async (product, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/add-product`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      const data = await response.json();

      if (response.ok) {
        return data.product; // Assuming the response returns the added product in data.product
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (product, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/edit-product`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      const data = await response.json();

      if (response.ok) {
        return data.product; 
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/get-products`, {
        method: "GET",
      });
      const data = await response.json();
      if (response.ok) {
        return data.data;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleAvailability = createAsyncThunk(
  "products/toggleAvailability",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/toggle-available`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProductDetails = createAsyncThunk(
  "product-details",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/product-details`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (response.ok) {
        return data.data;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/delete-product`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (response.ok) {
        return data.data;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productDetails: null,
    isLoading: false,
    isError: false,
    errorMessage: null,
  },
  extraReducers: (builder) => {
    builder
      // getAllProducts
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to fetch products";
      })
      // addProducts
      .addCase(addProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(addProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.push(action.payload);
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(addProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to add product";
      })
      // editProduct
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(editProduct.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to add product";
      })
      //getProductDetails
      .addCase(getProductDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage =
          action.payload || "Failed to fetch product details";
      })
      // toggleAvailability
      .addCase(toggleAvailability.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(toggleAvailability.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(toggleAvailability.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to add product";
      });
  },
});

export default productSlice.reducer;
