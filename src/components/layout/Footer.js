import {FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css';
import React from "react";
function Footer() {
  return (
    <footer>
      <ul className={styles.social_list}>
      <li><FaFacebook /></li>
      <li><FaInstagram /></li>
      <li><FaLinkedin /></li>
      </ul>
      <p>Nosso rodape</p>
      </footer>
  );
}

export default Footer;