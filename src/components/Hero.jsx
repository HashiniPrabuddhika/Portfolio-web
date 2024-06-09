
import Position from "./Position";
import { animate, motion } from "framer-motion";
import { myImage,scroll } from "../assets";

import { styles } from "../styles";
import { FiDownload } from 'react-icons/fi';
import Social from "./Social";
const textVariant = {
  initial:{
    x: -500,
    opacity:0,
  },
  animate:{
    x: 0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildrren:0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
};

const sliderVariant = {
  initial:{
    x: 0,
  },
  animate:{
    x: "-220%",
    transition:{
      duration:20,
      repeat:Infinity,
      repeatType:"mirror",
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[60px]  max-w-15xl mx-auto ${styles.paddingX} flex flex-row items-start`}>
        <div className='flex flex-col justify-center items-center mt-1'>
        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
        <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
        <motion.div variants={textVariant} 
        initial ="initial" 
        animate='animate'>
          <motion.h1 className={`${styles.heroHeadText} mt-40 font-medium text-white text-[40px] xs:text-[60px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]`} variants={textVariant}>
            <motion.span className='text-[#915EFF]' variants={textVariant}>Hashini</motion.span><br variants={textVariant}/>Prabuddhika
          </motion.h1>
          
          <Position />

          <div className='flex flex-col xl:flex-row items-center gap-8 mt-20 lg:mt-20'>
            <button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2 bg-transparent text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-black transition-all duration-200 cursor-pointer"
              onClick={() => {
                  window.open("https://drive.google.com/file/d/1-3XXMo1B8LYHT3u5b2EkAYBTnbqV2B64/view?usp=sharing", "_blank");
              }}
            >
              <span>Download CV</span>
              <FiDownload className='text-xl' />
            </button>
            <div className="mb-8 px-10 items-center  xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-12 h-12 border border-accent rounded-full flex justify-center items-center
              text-accent text-base hover:bg-[#ADD8E6] hover:text-primary hover:transittion-all duration-500"/>
            </div>
          </div>
          <div className='mt-5'>
          <motion.img variants={textVariant}
          animate="scrollButton"
          src={scroll} alt='scroll'/>
          </div>
        </motion.div>


       
        </div>

        <motion.div 
  style={{
    position: 'absolute',
    fontSize: '8vh',
    bottom: '100px',
    whiteSpace: 'nowrap',
    color: '#ffffff11',
    width:'50%',
    fontWeight:'bold',
  }}
  variants={sliderVariant}  initial ="initial" animate='animate'>
  Computer Engineering Undergraduate
</motion.div>

        <div className="flex-1 flex  lg:justify-end mt-0">
        <img src={myImage} alt='myImage' className='w-220 h-620 object-contain ml-auto' />
         
        </div>
      </div>

      <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" />
      <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" />
      <img className="parallax__mountain1" src="./parallax/3Mountain.svg" alt="" />
      <img className="parallax__mountain2" src="./parallax/4Mountain.svg" alt="" />
      <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" />
      <img className="parallax__sun" src="./parallax/6Sun.svg" alt="" />
    </section>
  );
};

export default Hero;
