import { Container, Row, Col, Tab, Nav, TabPane } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projectML.avif";
import projImg3 from "../assets/img/portfolio.avif";
import projImg2 from "../assets/img/el-bodegon.avif";
import cerImg1 from "../assets/img/egg.avif"
import cerIg2 from '../assets/img/javascripPlatzi1.avif'
import cerIg3 from '../assets/img/javascriptPlatzi2.avif'
import cerIg4 from '../assets/img/javascriptCoder.avif'
import projImg4 from '../assets/img/Suplemments.avif'
import inprogress from "../assets/img/dimo.avif";
import digital from "../assets/img/Juan-Morales-diploma.avif"
import vicio from "../assets/img/fondoVicio.png" 
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

  const projects = [
    {
      title: "Mercado Libre",
      description: "Design & Development",
      imgUrl: projImg1,
      projectUrl: 'https://ml-entrega-juan-morales.onrender.com'
    },
    {
      title: "El Bodegon",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Suplemments",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Dimo Startup",
      description: "Design & Development",
      imgUrl: inprogress,
    }
    ,
    {
      title: "Vicio Vintage",
      description: "Design & Development",
      imgUrl: vicio
    }
  ];

  const certificates = [
    {
      title: 'Egg Cooperation',
      description: 'Noviembre 2021 - Octubre 2022',
      image: cerImg1,
    },
    {
      title: 'CoderHouse',
      description: 'Noviembre 2021 - Octubre 2022',
      image: cerIg4,
    },
    {
      title: 'Platzi',
      description: 'Noviembre 2021 - Octubre 2022',
      image: cerIg2,
    },
    {
      title: 'Platzi',
      description: 'Noviembre 2021 - Octubre 2022',
      image: cerIg3,
    },
    {
      title: 'Digital House',
      description: 'Marzo 2023 - Noviembre 2023',
      image: digital,
    },
  ]
  return (
    <div className="fade-background">
      <section className="project css-selector" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Projects</h2>
                    <p>Over the last two years, I've delved into the world of programming, embarking on a journey that's seen me create a diverse range of dynamic projects. From crafting interactive web applications using JavaScript, Node.js, and React, to building robust back-end systems with Java and Spring, each project has been a stepping stone in my evolution as a programmer. I'm well-versed in database management with MySQL and use Git for codebase management, ensuring efficient teamwork. These projects not only represent lines of code but also signify my ongoing growth and the practical application of my knowledge in the ever-evolving programming landscape. I eagerly anticipate new challenges and further expanding my expertise as a developer.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 " id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Links</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="thir">Studies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="fourth">Certificates</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row style={{ justifyContent: 'center' }}>
                            {
                              projects.map((project, index) => {

                                return (
                                  <>
                                    <ProjectCard
                                      key={index}
                                      {...project}
                                    />
                                  </>
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <li style={{ display: 'flex', justifyContent: 'center' }}>
                            <ul>
                              <a href='https://ml-entrega-juan-morales.onrender.com' target="_blank" rel="noreferrer" className="link">Mercado Libre</a>
                              <a href='https://el-bodegon-jm.onrender.com' target="_blank" rel="noreferrer" className="link">El Bodegon</a>
                              <a href='https://suplemments-jm.onrender.com' className="link">Suplemments</a>

                            </ul>
                          </li>
                        </Tab.Pane>
                        <Tab.Pane eventKey="thir">
                          <div className="study-list">
                            <div className="study-card">
                              <h3>Marzo 2023 - Noviembre 2023</h3>
                              <p>Digital House</p>
                              <p>Full Stack Web Developer</p>
                              <p>Programa educativo part-time, práctico e intensivo.</p>
                              <p>Tecnologías: Javascript, Node.js, Html5, Css, Express.js, React, Mysql, Git</p>
                            </div>

                            <div className="study-card">
                              <h3>Noviembre 2021 - Octubre 2022</h3>
                              <p>Egg Cooperation</p>
                              <p>Full Stack Web Developer</p>
                              <p>Programa educativo full-time, práctico e intensivo.</p>
                              <p>Carga horaria: 600 hs</p>
                              <p>Tecnologías: Java, Spring, Mysql, Git, Html5, Css, Js, React</p>
                            </div>

                            <div className="study-card">
                              <h3>Mayo 2022 - Agosto 2022</h3>
                              <p>Javascript</p>
                              <p>Curso especializado en Javascript para Web Development.</p>
                              <p>Certificado por CoderHouse</p>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey='fourth'>
                          <div className="certi-cont">
                            {certificates.map((certificate, index) => (
                              <div className="proj-imgbx certificate" key={index}>
                                <img src={certificate.image} alt={certificate.title} />
                                <div className="proj-txtx">
                                  <h4>{certificate.title}</h4>
                                  <span>{certificate.description}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
