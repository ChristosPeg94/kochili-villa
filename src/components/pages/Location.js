import './Location.css';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion"

const Location = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
    }
  });

  return (
    <div ref={ref} className='map-location' id='location'>
      <motion.div 
      variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      className='location-text'>
        <p>
          Kochili Villa" in Agios Andreas - Nea Peramos, Kavala, presents a luxurious and inviting retreat for travelers seeking a memorable vacation. 
          With its four comfortable bedrooms, well-equipped kitchen, beautiful outdoor spaces, and convenient amenities, this holiday home ensures a delightful and unforgettable stay for families, friends, or groups of up to 10 guests.
          <br />Come and experience the harmonious blend of luxury, comfort, and natural beauty at "Kochili Villa" in Agios Andreas, where cherished memories are waiting to be made.
        </p>
      </motion.div>
      <div>
        <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12068.24649798754!2d24.281190901829195!3d40.87052180052144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aeb716ceafedc3%3A0xbc63bdfee0354e64!2s%22Kochili%20Villa%22%20LUXURY%20VILLA!5e0!3m2!1sel!2sgr!4v1687030360198!5m2!1sel!2sgr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    
    </div>
  )
}

export default Location