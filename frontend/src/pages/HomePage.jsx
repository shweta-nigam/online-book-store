import { useAuthStore } from "../store/useAuthStore";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const authUser = useAuthStore((state) => state.authUser);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  return (
    <div
     className="w-screen h-screen flex items-center justify-center px-4
    bg-[linear-gradient(90deg,rgba(0,36,31,0.8)_0%,rgba(5,87,150,0.8)_35%,rgba(0,0,0,0.8)_100%),url('/bg.png')]
    bg-cover bg-center"
    >
      <div className="text-center mx-auto">
        <h1 className="text-4xl font-bold mb-4"> Welcome to ReadGala</h1>
        {authUser ? (
          <>
            <p className="text-lg mb-6">
              Hello, <strong>{authUser.name}</strong>! Explore the Galaxy of Books!
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={() => navigate("/books")}>Browse Books</Button>
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            </div>
          </>
        ) : (
          <>
            <p className="text-lg mb-6">
              Sign up or log in to explore and review books!
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={() => navigate("/login")}>Login </Button>
              <Button variant="outline" onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
