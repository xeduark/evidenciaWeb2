import React from 'react';
import Input from './Input';
import Button from './Button';
import Section from '../ui/Section'; // Asegúrate de que la ruta sea correcta
import Paragraph from '../ui/Paragraph'; // Asegúrate de que la ruta sea correcta
import styles from '../../style/Form.module.css'; // Asegúrate de que la ruta sea correcta

const Form = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Form</h1>
        <div className={styles.inputButtonContainer}>
          <div className={styles.inputContainer}>
            <Input />
          </div>
          <Button />
        </div>
      </form>
      <div className={styles.sectionsContainer}>
        <div className={styles.sectionWrapper}>
          <Section />
          <Paragraph />
        </div>
        <div className={styles.sectionWrapper}>
          <Section />
          <Paragraph />
        </div>
        <div className={styles.sectionWrapper}>
          <Section />
          <Paragraph />
        </div>
      </div>
    </div>
  );
};

export default Form;

