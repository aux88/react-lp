import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (isOpen && document.body.clientWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>My Stylish LP</div>
        <nav>
          <div className={styles.hamburger} onClick={toggleMenu}>
            {`${isOpen ? "×" : "☰"}`}
          </div>
          <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
            <li>
              <Link to="/" onClick={scrollToTop}>ホーム</Link>
            </li>
            <li>
              <Link to="/about">私たちについて</Link>
            </li>
            <li>
              <Link to="/#features">特徴</Link>
            </li>
            <li>
              <Link to="/#testimonials">お客様の声</Link>
            </li>
            <li>
              <Link to="/#contact">お問い合わせ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
