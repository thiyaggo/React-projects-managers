import { FaFacebook, FaInstagram,FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';
function Footer(){
    return(
      <footer className={styles.rodape}>
        <ul className={styles.list}>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
        </ul>
        <p><span>MC Project</span> &copy; 2026</p>
      </footer>
    );
}

export default Footer;