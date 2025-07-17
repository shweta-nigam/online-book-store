import { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const login = useAuthStore((state) => state.login);
  const isLoggingIn = useAuthStore((state) => state.isLoggingIn);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] px-4">
      <Card className="w-full max-w-md shadow-2xl bg-gray-900 text-gray-100 rounded-xl hover:shadow-indigo-500/20 transition-shadow duration-300">
        <CardHeader className="text-center">
          <Badge className="mb-2 bg-indigo-600 text-white"> ReadGala</Badge>
          <CardTitle className="text-3xl font-bold">Login to your account</CardTitle>
          <p className="text-gray-400 text-sm mt-1">Welcome back! Please enter your details</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-800 border-gray-700 placeholder-gray-400 text-gray-100 focus:ring-indigo-500"
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-gray-800 border-gray-700 placeholder-gray-400 text-gray-100 focus:ring-indigo-500"
            />
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? "Logging in..." : "Login"}
            </Button>
          </form>
          <div className="text-center mt-4 text-sm text-gray-400">
            Don’t have an account?{" "}
            <span
              className="text-indigo-400 hover:underline cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


