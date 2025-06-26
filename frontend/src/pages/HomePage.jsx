import { useAuthStore } from "../store/useAuthStore";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const authUser = useAuthStore((state) => state.authUser);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  return (
    <div      style={{
    background: "linear-gradient(90deg, rgba(0,36,31,1) 0%, rgba(5,87,150,1) 35%, rgba(0,0,0,1) 100%)",
  }}
     className="w-screen h-screen flex items-center justify-center
 px-4">
      <div className="text-center mx-auto">
        <h1 className="text-4xl font-bold mb-4"> 📚 Welcome to BookBazaar</h1>
        {authUser ? (
          <>
            <p className="text-lg mb-6">
              Hello, <strong>{authUser.name}</strong>! Ready to browse and
              review books?
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
