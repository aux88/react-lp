import { memo } from "react";
import styles from "./Footer.module.css";

export const Footer = memo(() => {

  return (
    <footer className={styles.footer}>
      <div className="section-container">
        &copy; 2023 My Stylish LP. All rights reserved.
      </div>
    </footer>
  );
});
