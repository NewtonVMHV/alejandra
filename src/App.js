import {useState} from "react";
import './App.css';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Team from "./components/Team/Team";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Contacto from "./components/Contact/Contacto";
import Iniciativa from "./components/Iniciativa/Iniciativa";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div>
      <Header/>
      <main className="bg-white">
          <Hero/>
          <Iniciativa/>
          <Team/>
          <Feature/>
          <Contacto/>
          <ScrollToTop smooth top="20"/>
          <Footer/>
      </main>
    </div>
  );
}

export default App;
