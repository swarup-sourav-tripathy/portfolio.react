import "./navbar.scss"
import React from "react"
import { motion } from "framer-motion"
import Sidebar from "./../sidebar/Sidebar.jsx"
const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />

            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    swarup.<article>Dev(<p>"web"</p>)</article>
                </motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/swarup-sourav-tripathy-58b55b256"><img src="/6297a2f1e01809629f113598.png" width="30px" height="30px" alt="" /></a>
                    <a href="mailto:swaruptripathy03@gmail.com?subject=Contact&body=Hello, I want to get in touch with you."><img src="/Gmail_logo_PNG9.png" width="20px" height="20px" alt="" /></a>
                    <a href="https://twitter.com/SwarupSouravTr1?t=T6Mt7yhk1-anLQBHxMNudQ&s=09"><img src="/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10806.avif" width="30px" height="25px" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar