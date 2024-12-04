import { useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import {motion} from "framer-motion"
import "./projects.scss"

const items = [
    {
        id: 1,
        title: "Blog App",
        img: "/Screenshot 2024-10-08 185659.png",
        link:"https://react-appwrite-blog-theta.vercel.app/",
        elements: "React.js | appwrite | Shadcn | Tailwind CSS",
        desc: "It allows user to share new thoughts,new places and anything new to explore with others"
    },
    {
        id: 2,
        title: "Confession App",
        img: "/Screenshot 2024-10-08 191231.png",
        link:"https://next-confession.vercel.app/",
        elements: "Next.js | MongoDB | Shadcn | Next OAuth",
        desc: "It allows users to pure anonymously share their thoughts and opinions with others, fostering open communication and honest feedback."
    },
    {
        id: 3,
        title: "Video App",
        img: "/Screenshot 2024-12-04 225547.png",
        link:"https://saas-video-app.vercel.app/",
        elements: "Next.js | Postgresql | Prisma | Cloudinary | Clerk",
        desc: "It is a SAAS website, where user can customize his/her photos as per required platfoem and also can compressed his/her video.All this possible by using featues of cloudinary"
    },
]

const Single = ({item}) => {
    // const ref = useRef()
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    // })

    // const y = useTransform(scrollYProgress , [0 , 1] , [-300 , 300])
    return(
       
            <div className="container">
               <div className="wrapper">
              <div className="imageContainer">
              <img src={item.img} alt="" />
              </div>
                <div className="textContainer" >
                    <h2>{item.title}</h2>
                    <p>{item.elements}</p>
                    <p>{item.desc}</p>
                    <button><a href={item.link}>See Demo</a></button>
                </div>
               </div>
            </div>
        
    )
}

const Projects = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end","start start"]

    })

    const scaleX = useSpring(scrollYProgress , {
        stiffness: 100,
        damping: 30,
    })

    return(
        <div className="project">
           <div className="progress">
            <h1>My Best Works</h1>
            <motion.div style={{scaleX}} className="progressBar">
            </motion.div>
           </div>
            {items.map((item) => (
                <Single item={item} key={item.id} /> 
            ))}
         
        </div>
    )
}

export default Projects