"use client";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { logoutThunk } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogout() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap();
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return { logout };
}