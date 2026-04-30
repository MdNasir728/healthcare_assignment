import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { loginUser, logoutUser, LoginPayload } from "@/services/auth.service";

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};


export const loginThunk = createAsyncThunk<
  User,
  LoginPayload,
  { rejectValue: string }
>("auth/login", async (payload, { rejectWithValue }) => {
  try {
    return await loginUser(payload);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Login failed");
  }
});

export const logoutThunk = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>("auth/logout", async (_, { rejectWithValue }) => {
  try {
    await logoutUser();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Logout failed");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginThunk.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.loading = false;
          state.user = action.payload;
        }
      )
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Login failed";
      });

    builder
      .addCase(logoutThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Logout failed";
      });
  },
});

export default authSlice.reducer;