import "./index.css";
import ServicesBlock from "./components/Footer/ServicesBlock";
import AboutBlock from "./components/Footer/AboutBlock";
import SocialMediaBlock from "./components/Footer/SocialMediaBlock";
import LogoSubscribeBlock from "./components/Footer/LogoSubscribeBlock";
import OfferBlocks from "./components/WhatWeOffer/OfferBlocks";

function App() {
  return (
    <div className="wrapper">
      <main className="main-container">
        <section className="what-we-offer-container">
          <h2 className="title">
            What We <span className="colored-text">Offer</span>
          </h2>
          <OfferBlocks />
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <LogoSubscribeBlock />
          <ServicesBlock />
          <AboutBlock />
          <SocialMediaBlock />
        </div>
      </footer>
    </div>
  );
}

export default App;
