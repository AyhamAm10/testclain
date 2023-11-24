import React from 'react'
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const Mainimg = () => {
  return (
    <div className='mainimg p-50' >
       <div className="box">
       <motion.dev variants={textVariant()}>
       <h1>MEIN ERFOLG. <br />MEINE ZUKUNFT.</h1>
       <p className='white'>WIR BEGEISTERN GEMEINSAM.</p>
         
       <div className=''>
       <button className='btn white min-bg border-ra p-10' style={{"padding" : "10px" }}>AKTUELLE JOBANGEBOTE</button>
       <hr />
       <div className="input-src white d-flex">
        <input type="text" />
        <button className='btn min-bg white'>suchen</button>
       </div>
       </div>
       </motion.dev>
       </div>
    </div>
  )
}

export default SectionWrapper(Mainimg, "mainimg"); 
