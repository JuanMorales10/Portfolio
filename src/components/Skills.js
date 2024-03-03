import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareJs, faJava, faNode , faReact , faCss3Alt , faHtml5 , faGithub} from '@fortawesome/free-brands-svg-icons';



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Equipped with a diverse skill set in the realm of web development, I possess a deep understanding of JavaScript, Node.js, HTML5, CSS, and the intricacies of client-server communication. My proficiency extends to Java, MySQL, and the development of robust back-end systems, while I also excel in leveraging Express.js and React for creating dynamic, responsive web applications. Git plays a fundamental role in my collaborative work, ensuring version control and streamlined teamwork. My familiarity with Spring bolsters my capabilities, enabling the creation of versatile and scalable applications. These skills collectively represent my comprehensive toolkit for tackling various web development challenges.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  {/* <img src={meter1} alt="Image" /> */}
                  <FontAwesomeIcon icon={faHtml5} className="icon"  style={{color: '#E34C26'}} />
                  <h5 className="text-icon">HTML5</h5>
                </div>
                <div className="item">
                <FontAwesomeIcon icon={faCss3Alt} className="icon" style={{color: '#264de4'}} />
                  <h5 className="text-icon">CSS</h5>
                </div>
                <div className="item">
                <FontAwesomeIcon icon={faReact} className="icon" style={{color: '#61DBFB'}} />
                  <h5 className="text-icon">React.js</h5>
                </div>
                <div className="item">
                <FontAwesomeIcon icon={faNode}  className="icon" style={{color: '#68A063'}}/>
                  <h5 className="test-icon">Node.js</h5>
                </div>
                <div className="item">
                <FontAwesomeIcon icon={faJava}  className="icon" style={{color: '#5382a1'}}/>
                  <h5 className="test-icon">Java</h5>
                </div>
                <div className="item">
                <FontAwesomeIcon icon={faSquareJs}  className="icon" style={{color: '#ffff00d9'}}/>
                  <h5 className="test-icon">JavaScript</h5>
                </div>
                <div className="item">
                <FontAwesomeIcon icon={faGithub}  className="icon" style={{color: '#fff'}} />
                  <h5 className="test-icon">Git Hub</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


