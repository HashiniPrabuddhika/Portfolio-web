import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../data";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>About Me</h2>
    </motion.div>

    <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-11xl leading-[30px] text-justify align-middle'
      >
        I am a dedicated and ambitious Computer Engineering undergraduate at the Faculty of Engineering, University of Ruhuna. 
        My academic journey has equipped me with a solid foundation in both front-end and back-end web development. I have developed responsive, 
        user-friendly websites and have an understanding of web design principles. My interests extend to mobile application development, AI, and Quality Assurance, 
        with practical experience in QA methodologies, databases, and version control systems like Git. I have thrived in agile environments, focusing on continuous improvement and best engineering practices. 
        Currently, I am enhancing my skills in Docker and CI/CD, eager to adapt to new challenges and contribute effectively.
      </motion.p>
      <div className='mt-20 flex px-12 flex-wrap items-center gap-12'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    
    </>
  );
}

export default SectionWrapper(About, "about");