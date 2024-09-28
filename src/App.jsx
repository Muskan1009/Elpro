import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PageTop from "./layouts/PageTop"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Services from "./pages/Services"

  function App() {

    return (
      <>

        <PageTop />

        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />

        </Routes>

        <Footer />

      </>
    )
  }

export default App