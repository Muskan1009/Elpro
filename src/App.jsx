import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PageTop from "./layouts/PageTop"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Services from "./pages/Services"
import Terms from "./pages/Terms"
import Privacy from "./pages/Privacy"
import CostCalculator from "./pages/CostCalculator"
import ScrollReset from "./components/ScrollReset"
import Blogs from "./pages/Blogs"
import BlogPost from "./pages/BlogPost"
import { Helmet } from "react-helmet";

function App() {

  return (
    <>

      <ScrollReset />

      <PageTop />

      <Header />

      <Routes>

        <Route path="/" element={
          <>
            <Helmet>
              <title>ELPRO Cleaning Services | Home</title>
              <meta
                name="description"
                content="Welcome to Elpro Cleaning Services. Explore our professional cleaning services."
              />
            </Helmet>
            <Home />
          </>
        } 
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cost-calculator" element={<CostCalculator />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:blogId" element={<BlogPost />} />

        <Route path="*" element={<Home />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App