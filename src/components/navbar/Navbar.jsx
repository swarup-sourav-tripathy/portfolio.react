import "./navbar.scss"
import React from "react"
import { motion } from "framer-motion"
import Sidebar from "../sidebar/sidebar"

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
                    <a href="#"><img src="/6297a2f1e01809629f113598.png" width="30px" height="30px" alt="" /></a>
                    <a href="#"><img src="/Gmail_logo_PNG9.png" width="20px" height="20px" alt="" /></a>
                    <a href="#"><img src="/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10806.avif" width="30px" height="25px" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar