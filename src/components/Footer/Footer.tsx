import { memo } from "react";
import style from "./Footer.module.css";

export const Footer = memo(() => {

  return (
    <footer className={style.footer}>
      <div className="section-container">
        &copy; 2023 My Stylish LP. All rights reserved.
      </div>
    </footer>
  );
});
