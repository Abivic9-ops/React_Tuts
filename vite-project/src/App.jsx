import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import About from './About';
import Contact from './Contact';
import BlogDetails from './BlogDetails';

function App() {

  return (
    <Router>
      <>
        {/* Background animated blobs */}
        <div className="blob-bg-1"></div>
        <div className="blob-bg-2"></div>

        <div className="min-h-screen text-slate-800">
          <Navbar />
          <div className="container mx-auto px-6 py-10 max-w-7xl">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bloglist/:id" element={<BlogDetails />} />
              
            </Routes>


          </div>
        </div>
      </>
      </Router>
  )
}

export default App
