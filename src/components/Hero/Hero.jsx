import style from "./Hero.module.css";

const DEFAULT_TITLE = "新しい体験をあなたに";
const DEFAULT_SUBTITLE =
  "革新的な製品で、あなたの日常をより豊かに、より便利に。";
const DEFAULT_CTA_TEXT = "今すぐ体験する";
const DEFAULT_CTA_LINK = "#contact";

export const Hero = ({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  ctaText = DEFAULT_CTA_TEXT,
  ctaLink = DEFAULT_CTA_LINK,
}) => {
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
};
