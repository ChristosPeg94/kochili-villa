import { useEffect, useRef } from 'react';
import './Home.css';
import { motion, useInView, useAnimation } from "framer-motion"

const Home = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });

  return (
    <div ref={ref} className='header' id='home'>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='title'
        >
        <h1>"Kochili Villa" LUXURY VILLA</h1>
        <p>Experience the perfect getaway at a luxurious<br/>holiday villa in Agios Andrea - N. Peramos, Kavala, Greece!</p>
      </motion.div>
      <motion.div 
        variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        className='header-button'>
        <button type='button'>Contact Us</button>

      </motion.div>
    </div>
  )
}

export default Home