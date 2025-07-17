import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { axiosInstance } from "@/lib/axios";
import { Loader2 } from "lucide-react";

export default function VerifyPage() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("Verifying your account....");
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setStatus("Verification token is missing.");
      return;
    }

    axiosInstance
      .get(`/auth/verify?token=${token}`)
      .then((res) => {
        console.log("Verification success:", res.data);
        setStatus("✅ Your account has been verified!");
        setTimeout(() => navigate("/login"), 3000);
      })
      .catch((error) => {
        console.error("Verification failed:", error);
        setStatus("Verification failed. The token may be invalid or expired.");
      });
  }, [searchParams, navigate]);

  const isLoading = status.startsWith("Verifying");

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-900 text-gray-100">
      <div className="p-6 bg-gray-800 rounded shadow-lg flex flex-col items-center">
        {isLoading && (
          <Loader2 className="animate-spin w-10 h-10 mb-4 text-indigo-400" />
        )}
        <h2 className="text-xl font-semibold">{status}</h2>
        {status.startsWith("✅") && (
          <p className="text-sm mt-2">Redirecting to login...</p>
        )}
      </div>
    </div>
  );
}
