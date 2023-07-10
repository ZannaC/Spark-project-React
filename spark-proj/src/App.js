import "./index.css";
import ServicesBlock from "./components/Footer/ServicesBlock";
import AboutBlock from "./components/Footer/AboutBlock";
import SocialMediaBlock from "./components/Footer/SocialMediaBlock";
import LogoSubscribeBlock from "./components/Footer/LogoSubscribeBlock";
import OfferBlocks from "./components/WhatWeOffer/OfferBlocks";
import SocialMedia from "./components/Header/SocialMedia";
import BurgerMenu from "./components/Header/BurgerMenu";
import HeaderTitle from "./components/Header/HeaderTitle";
import SubscribeToBlock from "./components/FullServiceAgency/SubscribeToBlock";
import StatisticsBlock from "./components/FullServiceAgency/StatisticsBlock";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header-container">
          <SocialMedia />
          <BurgerMenu />
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
        <section className="full-service-agency-container">
          <h2 className="title">
            A <span className="colored-text">Full-Service</span> Agency
          </h2>
          <StatisticsBlock />
          <SubscribeToBlock />
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
