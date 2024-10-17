import "./about.scss"

const About = () => {


    return (

        <div className="about">
            <div className="contentContainer">
                <h1>About  <article>  me</article></h1>
                <hr />
                <div className="container">
                    <div className="content">
                        <h3>Hi, I am <article>Swarup Sourav Tripathy</article>,</h3>
                        <br />
                        <p>
                            I am a passionate Full Stack Developer with expertise in the <span>MERN</span> stack (MongoDB, Express.js, React.js, Node.js) and a
                            strong foundation in modern web technologies. I have hands-on experience building dynamic, responsive, and scalable
                            applications using <span>HTML</span>, <span>CSS</span>,<span> JavaScript</span>, and <span>TypeScript</span>, complemented
                            by frameworks like <span>React.js</span>, <span>Next.js</span>, and
                            CSS libraries such as <span>Bootstrap</span> and <span>Tailwind CSS</span>.</p>
                        <br />

                        <p>
                            On the backend, I am proficient in managing databases using <span>MongoDB</span> and <span>SQL</span>, and I've also worked with
                            backend-as-a-service platforms like <span>Appwrite</span> and <span>Supabase</span>. My understanding of core backend concepts includes
                            working with <span>API requests</span>, handling <span>tokens</span> for authentication, managing <span>middleware</span> for route handling, and ensuring
                            smooth HTTP request-response cycles. </p>
                        <br />
                        <p>
                            With a keen understanding of different HTTP methods and status codes, I focus on creating efficient,
                            well-architected solutions that provide optimal user experiences. I’m driven by solving complex problems and
                            continuously expanding my skill set to keep up with the fast-paced world of web development.
                        </p>
                        <a href="" download="">
                            <button>Download CV</button>
                        </a>
                    </div>
                    <div className="imageContainer">
                        <img src="/IMG-20241016-WA0020-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>


        </div>


    )
}

export default About;