import React from "react";
import styles from "./SocialButton.module.scss";
function SocialButton({ children, ...props }) {
  const { link, ...rest } = props;
  return (
    <a href={link} target="_blank" rel="noreferrer" className={styles.button}>
      {children}
    </a>
  );
}

export default SocialButton;
