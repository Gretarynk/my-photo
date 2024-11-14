import React from 'react';

import styles from '../Main/main.module.css';
import "@/app/globals.css";

const Main = () => {
    return (
      <section className={styles.wrapper}>
        <div className={styles.overlay}>
        <div className={styles.headerWrapper}>
                    <h1 className={styles.heading}>Capture moments!</h1>
                </div>
          <div className={styles.textWrapper}>
          <div className={styles.textBox}><p>No one is perfect, so let yourself be you.<br />  
Show your perfect imperfections and fall in love.<br /> 
Let capture together the beauty of your true self. </p></div>
</div>
        </div>
      </section>
    );
  };
export default Main;