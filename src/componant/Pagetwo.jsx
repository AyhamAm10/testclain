import React from 'react';
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
const Pagetwo = () => {
  return (
    <div className='pagetwo'>
        {/* <div className="accordion accordion-flush" id="accordionFlushExample">
           
            <div className="accordion-item bg-blue">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Personaldienstleistung auf einer neuen Ebene.
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <div className="d-flex justify-content-center align-items-center ">

                    <button className='btn white min-bg border-ra p-10' style={{"padding" : "10px" }}>Zur neuen Homepage.</button>
                    </div>
                    <div className="text white">
                        <p className='margin-xp'>Zuverlässige Partnerschaften seit 2003.</p>
                        <p className='margin-p'>Unser Erfolg in den Bereichen Personalmanagement und Unternehmensberatung basiert auf einer partnerschaftlichen Zusammenarbeit mit unseren begeisterten Kunden und Mitarbeitern. Ob Zeitarbeit, Personalservice oder Personalberatung sowie maßgeschneiderte Unternehmenslösungen – als modernes und erfolgreiches Dienstleistungsunternehmen stehen wir unseren Partnern stets zur Seite. Daher expandieren wir stetig, und legen Wert auf langfristige Kundenbeziehungen.</p>
                        <p className='margin-p'>Als Experte für Personalvermittlung bildet MANWORK das zuverlässige Bindeglied für faire Partnerschaften zwischen Unternehmen und Arbeitssuchenden. Unsere Erfolgsbilanz in den Bereichen Personalmanagement, Personalüberlassung, Personalvermittlung und Unternehmensberatung spricht für sich: Seit 2003 profitieren über 250 Unternehmen aller Größenordnungen ebenso wie qualifizierte Facharbeiter, Techniker, Arbeitssuchende oder Hilfsarbeiter von unserer umfassenden Expertise. Bei uns stehen die Bedürfnisse und Anforderungen beider Seiten im Mittelpunkt. Auf diese Weise finden wir individuelle Lösungen, die Unternehmen und Leasingarbeitern gleichermaßen zugutekommen.</p>

                    </div>
                </div>
                </div>
            </div>
        </div> */}

        <div className='sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0'>
        <motion.div variants={textVariant(0.5)}>
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Personaldienstleistung </p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">auf einer neuen Ebene.</h2>
            <p className='margin-xp'>Zuverlässige Partnerschaften seit 2003.</p>
                        <p className='margin-p'>Unser Erfolg in den Bereichen Personalmanagement und Unternehmensberatung basiert auf einer partnerschaftlichen Zusammenarbeit mit unseren begeisterten Kunden und Mitarbeitern. Ob Zeitarbeit, Personalservice oder Personalberatung sowie maßgeschneiderte Unternehmenslösungen – als modernes und erfolgreiches Dienstleistungsunternehmen stehen wir unseren Partnern stets zur Seite. Daher expandieren wir stetig, und legen Wert auf langfristige Kundenbeziehungen.</p>
                        <p className='margin-p'>Als Experte für Personalvermittlung bildet MANWORK das zuverlässige Bindeglied für faire Partnerschaften zwischen Unternehmen und Arbeitssuchenden. Unsere Erfolgsbilanz in den Bereichen Personalmanagement, Personalüberlassung, Personalvermittlung und Unternehmensberatung spricht für sich: Seit 2003 profitieren über 250 Unternehmen aller Größenordnungen ebenso wie qualifizierte Facharbeiter, Techniker, Arbeitssuchende oder Hilfsarbeiter von unserer umfassenden Expertise. Bei uns stehen die Bedürfnisse und Anforderungen beider Seiten im Mittelpunkt. Auf diese Weise finden wir individuelle Lösungen, die Unternehmen und Leasingarbeitern gleichermaßen zugutekommen.</p>

        </motion.div>

        </div>

    </div>
  )
}

export default SectionWrapper(Pagetwo, "Pagetwo"); 
