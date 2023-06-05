import React from 'react';
import { MdEmail as IconEmail } from 'react-icons/md';
import { BsGithub as IconGithub, BsLinkedin as IconLinkedin } from 'react-icons/bs';
import styles from './ContactPage.module.css';

function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <h1>Contacto</h1>
      <div className={styles.contactData}>
        <IconEmail className={styles.icon} />
        <span>diego.morales.aquino@gmail.com</span>
        <IconGithub className={styles.icon} />
        <a href="https://github.com/Aq202">Aq202</a>
        <IconLinkedin className={styles.icon} />
        <a href="https://www.linkedin.com/in/diego-morales-598000205/">Diego Morales</a>
      </div>
    </div>
  );
}

export default ContactPage;
