import React from 'react'
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const Text = () => {
  return (

    <motion.div variants={textVariant()}>
        <h1 className='text-c co-green'>Karrierestarter</h1>
        <p className='margin-p text-c '>Du begeisterst aus Leidenschaft? Finde bei MANWORK den perfekten Job und bewirb dich ganz einfach online!</p>
        <p className='margin-p text-c '>Du bist auf der Suche nach deinem Traumjob?
            Er soll abwechslungsreich, interessant, herausfordernd, spannend, fair und mit tollen Karrierechancen ausgestattet sein? Wir haben den passenden Job für dich. Bewirb dich bei MANWORK und starte deine Karriere. WE TRY HARD FOR YOU.</p>
                        <p className='margin-p text-c '> Unser Handschlag zählt. Und wir denken um, mit und weiter. Für unsere Kunden genauso wie unser Team. Together we are stronger.
            Deshalb gilt: MANWORK for ALL. Und umgekehrt.
            Was das konkret heißt?</p>
    </motion.div>
  )
}

export default SectionWrapper(Text, "text");
