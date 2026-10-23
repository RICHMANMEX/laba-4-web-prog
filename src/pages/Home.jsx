import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Vr from "../components/Vr";
import PurpleBanner from "../components/PurpleBanner";
import Blog from "../components/Blog";
import StepFuture from "../components/StepFuture";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="page">
        <section className="section header">
          <Header />
        </section>
        <section className="section hero_section">
          <Hero />
        </section>
        <section className="section brands_section">
          <Brands />
        </section>
        <section className="section what_is_chatgpt_section">
          <WhatIsChatGpt />
        </section>
        <section className="section future_here">
          <FutureHere />
        </section>
        <section className="section vr_section">
          <Vr />
        </section>
        <section className="section purple_banner">
          <PurpleBanner />
        </section>
        <section className="section blog_section">
          <Blog />
        </section>
        <section className="section step_future_section">
          <StepFuture />
        </section>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
