import {
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "@/lib/firebase";


export interface LoginPayload {
  email: string;
  password: string;
}

export const loginUser = async (
  payload: LoginPayload
): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );

    return userCredential.user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Login failed");
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Logout failed");
  }
};