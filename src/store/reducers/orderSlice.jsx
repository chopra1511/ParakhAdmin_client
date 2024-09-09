import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const base_URL = "http://localhost:3000";


export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/get-orders`, {
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

export const getOrderDetails = createAsyncThunk(
  "orders/getOrderDetails",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/order-details`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId }),
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

export const updateTracking = createAsyncThunk(
  "orders/updateTracking",
  async ({ orderId, tracking }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/order-tracking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId, tracking }),
      });
      const data = await response.json();
      if (response.ok) {
        return data.updatedOrder.order_tracking;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    orderDetails: [],
    orderTracking:[],
    isLoading: false,
    isError: false,
    errorMessage: null,
  },
  extraReducers: (builder) => {
    builder
      // getOrders
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to fetch orders";
      })
      // getOrderDetails
      .addCase(getOrderDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getOrderDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to fetch orders";
      })
      // updateTracking
      .addCase(updateTracking.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(updateTracking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderTracking = action.payload;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(updateTracking.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to fetch orders";
      });
  },
});

export default orderSlice.reducer;