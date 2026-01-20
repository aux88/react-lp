import "./App.css";
import { Contact } from "./components/Contact/Contact";
import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Testimonials } from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="新しい体験をあなたに"
          subtitle="革新的な製品で、あなたの日常をより豊かに、より便利に。"
          ctaLink="#contact"
          ctaText="今すぐ体験する"
        />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
