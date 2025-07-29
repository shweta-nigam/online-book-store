import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/index";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore"; 

function App() {

  const checkAuth = useAuthStore((state) => state.checkAuth);
// const { isCheckingAuth } = useAuthStore();
// if (isCheckingAuth) return <div className="text-white text-center py-20">Loading...</div>;

  useEffect(() => {
    checkAuth(); 
  }, [checkAuth]);

  return (
    <BrowserRouter>
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

