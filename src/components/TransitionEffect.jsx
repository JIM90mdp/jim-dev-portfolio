import { motion } from 'framer-motion';

const TransitionEffect = () => {
  return (
    <>
     <motion.div
        className='fixed top-0 bottom-0 left-0 w-1/2 z-30 bg-rightGradient'
        initial={{ x: '0%', width: '50%' }}
        animate={{ x: '0%', width: '0%' }}
        // exit={{ x: ['-100%', '100%'], width: ['100%', '0%'] }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-0 w-1/2 z-20 bg-leftGradient'
        initial={{ x: '0%', width: '50%' }}
        animate={{ x: '0%', width: '0%' }}
        // exit={{ x: ['100%', '-100%'], width: ['100%', '0%'] }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
    </>
  );
};

export default TransitionEffect;
