import "./heroSection.scss"
import {motion} from "framer-motion"

const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        }
    },
    scrollButton:{
        opacity: 0,
        y:10,
        transition:{
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial:{
        x: 0,
    },
    animate:{
        x: "-290%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20
        }
    }
}

const HeroSection = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div variants={textVariants} initial="initial" animate="animate" className="textContainer">
                    <motion.h2 variants={textVariants} >Swarup Sourav Tripathy</motion.h2>
                    <motion.h1 variants={textVariants} >Web Devloper</motion.h1>
                    <motion.div className="button" variants={textVariants} >
                        <motion.button variants={textVariants} >Github</motion.button>
                    </motion.div>
                    <motion.div variants={textVariants} >
                        <motion.img  variants={textVariants} animate="scrollButton" src="/54414-200.png" alt="" />

                    </motion.div>

                </motion.div>

            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Full Stack MERN Devloper
            </motion.div>
            <div className="imageContainer">
                <img src="/IMG-20241016-WA0015-removebg.png"  alt="" />
            </div>
        </div>
    )
}

export default HeroSection;