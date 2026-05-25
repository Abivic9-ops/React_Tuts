import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <>
      {/* Background animated blobs */}
      <div className="blob-bg-1"></div>
      <div className="blob-bg-2"></div>

      <div className="min-h-screen text-slate-800">
        <Navbar /> 
        <div className="container mx-auto px-6 py-10 max-w-7xl">
          <Home/>
        </div>
      </div>
    </>
  )
}

export default App
