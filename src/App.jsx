import "./App.css";
import "@fontsource/poppins";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ImageUpload from "./components/ImageUpload";

function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <ImageUpload></ImageUpload>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
