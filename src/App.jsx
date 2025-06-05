import './App.css'
import ScrollToTop from './components/ScrollToTop';
import Account from './pages/Account'
import Contact from './pages/Contact'
import Home from './pages/Home'
import VideoBanner from './components/VideoBanner'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <VideoBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
