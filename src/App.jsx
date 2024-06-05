import "./App.css";
import "@fontsource/poppins";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Hero></Hero>
        <Gallery></Gallery>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
