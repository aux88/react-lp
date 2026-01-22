import { Contact } from "../../Contact/Contact";
import { Features } from "../../Features/Features";
import { Footer } from "../../Footer/Footer";
import { Hero } from "../../Hero/Hero";
import { Testimonials } from "../../Testimonials/Testimonials";


export const Home =()=>{
    return (
        <>
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
)};