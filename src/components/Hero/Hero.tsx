import { memo } from "react";
import style from "./Hero.module.css";

const DEFAULT_TITLE: string = "新しい体験をあなたに";
const DEFAULT_SUBTITLE: string  =
  "革新的な製品で、あなたの日常をより豊かに、より便利に。";
const DEFAULT_CTA_TEXT: string  = "今すぐ体験する";
const DEFAULT_CTA_LINK: string  = "#contact";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const Hero = memo(({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  ctaText = DEFAULT_CTA_TEXT,
  ctaLink = DEFAULT_CTA_LINK,
  }: HeroProps) => {

  return (
    <section id="hero" className={style.hero}>
      <div className="section-container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href={ctaLink} className={style.ctaButton}>
          {ctaText}
        </a>
      </div>
    </section>
  );
});
