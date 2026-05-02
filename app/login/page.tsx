"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { loginThunk, setUser } from "@/features/auth/authSlice";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface LoginFormState {
  email: string;
  password: string;
}

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { loading } = useAppSelector((state) => state.auth);

  const [form, setForm] = useState<LoginFormState>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      router.push('/dashboard')
      dispatch(setUser(JSON.parse(storedUser)));

    }
  }, [dispatch]);

  const handleChange = (key: keyof LoginFormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }

    const result = await dispatch(loginThunk(form));

    if (loginThunk.fulfilled.match(result)) {
      toast.success("Login successful 🎉");
      router.push("/dashboard");
    } else {
      toast.error(result.payload || "Login failed");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
        <Card className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl">
          <CardContent className="p-8 space-y-6">
            {/* Heading */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-semibold text-white">
                Welcome Back
              </h1>
              <p className="text-sm text-slate-400">
                Login to Healthcare Dashboard
              </p>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
              />

              <Input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
              />
            </div>

            {/* Button */}
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}