// src/App.jsx
import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import Portfolio    from "./components/Portfolio";
import Services     from "./components/Services";
import Institutions from "./components/Institutions";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Institutions />
      <Contact />
      <Footer />
    </>
  );
}