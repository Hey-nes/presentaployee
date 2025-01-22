import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://ownit.se" target="_blank" rel="noopener noreferrer">
        Brought to you by{" "}
        <img src="/ownit.png" alt="Ownit logo" className={styles.logo} />
      </a>
    </footer>
  );
};

export default Footer;
