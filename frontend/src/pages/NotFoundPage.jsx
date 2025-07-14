import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="w-screen flex flex-col items-center justify-center flex-1 py-8
      bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] text-gray-100 px-4 relative overflow-hidden ">
      
      <div className="flex flex-col items-center justify-center flex-1 text-center">
   
        <img src="/404.png" alt="404" className="w-78 mb-4 drop-shadow-lg" />

        <h1 className="text-4xl font-bold mb-2">404 – Page not found</h1>
        <p className="mb-6 text-gray-300 italic">“Looks like this page wandered off to read a book 📖”</p>
        
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition shadow-md"
        >
          Go back home
        </button>
      </div>
    </div>
  );
}

