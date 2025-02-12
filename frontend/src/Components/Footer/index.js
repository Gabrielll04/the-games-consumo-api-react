import styles from "@/Components/Footer/Footer.module.css"

function Footer() {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <ul className={styles.footerItems}>
            <li>Português (Brasil)</li>
            <li>English (US)</li>
            <li>Español</li>
            <li>Français (France)</li>
            <li>Italiano</li>
          </ul>
        </div>
        <div className={styles.footerRight}>
          <ul>
            <li>The Games &copy; 2024</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
