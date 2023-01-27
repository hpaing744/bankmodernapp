import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col sm:flex-row box-shadow bg-black-gradient-2 rounded-[20px]`}>
      <div className='flex flex-1 flex-col'>
        <h2 className={styles.heading2}>Let's try our service.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business everywhere on planet.</p>
      </div>

      <div className={`${styles.flexCenter} sm:mt-0 mt-10 ml-0 sm:ml-10`}>
        <Button />
      </div>
    </section>
  )
}

export default CTA