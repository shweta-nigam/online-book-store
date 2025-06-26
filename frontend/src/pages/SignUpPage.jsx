import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signup = useAuthStore((state) => state.signup);
  const isSignup = useAuthStore((state) => state.isSignup);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
    navigate("/");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-[#f8fafc] via-[#c7d2fe] to-[#8b5cf6]
 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Create an Account
          </CardTitle>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit} className=" space-y-4">
            <Input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            />
            <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            />
            <Input
            name="Password"
            type="Password"
            placeholder="Password"
            value={formData.name}
            onChange={handleChange}
            required
            />
            <Button type="submit" className="w-full" disabled={isSignup}> {isSignup? "Signing up...." : "Sign Up"}
            </Button>
            </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage