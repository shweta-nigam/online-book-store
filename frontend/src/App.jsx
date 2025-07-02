import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/index'
import Footer from "./components/Footer"

function App() {

  return (
    <>
     <BrowserRouter>
        <AppRoutes />
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
