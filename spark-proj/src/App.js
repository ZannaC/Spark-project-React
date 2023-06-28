import "./index.css";
import ServicesBlock from "./components/Footer/ServicesBlock";
import AboutBlock from "./components/Footer/AboutBlock";
import SocialMediaBlock from "./components/Footer/SocialMediaBlock";
import LogoSubscribeBlock from "./components/Footer/LogoSubscribeBlock";
import OfferBlocks from "./components/WhatWeOffer/OfferBlocks";
import SocialMedia from "./components/Header/SocialMedia";
import LogoBurgerMenu from "./components/Header/LogoBurgerMenu";
import HeaderTitle from "./components/Header/HeaderTitle";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header-container">
          <SocialMedia />
          <LogoBurgerMenu />
          <HeaderTitle />
        </div>
      </header>

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
