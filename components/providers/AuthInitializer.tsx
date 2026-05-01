"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setUser } from "@/features/auth/authSlice";

export default function AuthInitializer() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  return null;
}