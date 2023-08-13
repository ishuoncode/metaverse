/* eslint jsx-quotes: ["error", "prefer-single"] */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../styles';
import { navVariants } from '../../utils/motion';

function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className='absolute w-[50%] inset-0 gradient-01' />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Image
          src='/search.svg'
          alt='search'
          className='w-[24px] h-[24px] object-contain'
          width={500}
          height={500}
        />
        <h2 className='font-extrabold text-[24] leading-[30px] text-white'>
          Metaversus
        </h2>
        <Image
          src='/menu.svg'
          alt='menu'
          className='w-[24px] h-[24px] object-contain '
          width={500}
          height={500}
        />
      </div>
    </motion.nav>
  );
}

export default Navbar;
