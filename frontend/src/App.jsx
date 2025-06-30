import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/index'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <>
     <BrowserRouter>
      <div
        style={{
          background: `linear-gradient(90deg, rgba(0,36,31,0.8) 0%, rgba(5,87,150,0.8) 35%, rgba(0,0,0,0.8) 100%), 
                      url('/logo.jpg') no-repeat center/cover`
        }}
        className="min-h-screen flex flex-col"
      >
        <Navbar />
        <AppRoutes />
      </div>
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
