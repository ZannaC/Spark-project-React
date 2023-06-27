import "./index.css";
import ServicesBlock from "./components/FooterBlocks/ServicesBlock";
import AboutBlock from "./components/FooterBlocks/AboutBlock";
import SocialMediaBlock from "./components/FooterBlocks/SocialMediaBlock";
import LogoSubscribeBlock from "./components/FooterBlocks/LogoSubscribeBlock";
import OfferBlock from "./components/WhatWeOfferBlock/OfferBlock";

function App() {
  return (
    <div className="wrapper">
      <main className="main-container">
        <section className="what-we-offer-container">
          <h2 className="title">
            What We <span className="colored-text">Offer</span>
          </h2>
          <div className="what-we-offer-block">
            <OfferBlock />
          </div>
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
