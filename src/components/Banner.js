import { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logojm from '../assets/img/foto sin fondo-Photoroom.png';
import { faGithub , faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';





export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;
  const toRotate = [ 'Web Developer','Full Stack Developer', "Web Designer"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };


  return (
    <section className="banner" id="home">
      <div>
        <div className="cont-banner" >
            <TrackVisibility className="left">
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* <span className="tagline">My Portfolio</span> */}
                  <h1>{`Hi! I'm Juan Morales`} <span className="txt-rotate" dataPeriod="1000" data-rotate='["Full Stack Developer", "Web Designer"]'><span className="wrap">{text}</span></span></h1>
                  <p className="parra">I define myself as a programming enthusiast with an insatiable thirst for knowledge and innovation. Each day presents an opportunity to explore new technologies and approaches in search of innovative solutions. My methodical approach and obsession with organization ensure precision and efficiency in every project I undertake. I take pride in my ability to simplify complex tasks and maintain a structure that guarantees success. I am currently on the lookout for my next professional adventure in the world of programming, with the determination to make a difference and grow as a standout professional. Through this pursuit, I hope to contribute to the success of innovative projects and learn from the brilliant minds I encounter along the way.</p>
                  <div className="social-icon">
                <a href="https://www.linkedin.com/in/juan-morales-pacheco-desarrolladorweb" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon-class" style={{ color: "#fff" }} />
                </a>
                <a href="https://instagram.com/j.moralessp1?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram}  className="icon-class" style={{ color: "#fff" }}/>
                </a>
                <a href="https://github.com/JuanMorales10" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="icon-class" style={{ color: "#fff" }} />
                </a>
              </div>                
                </div>
              )}
            </TrackVisibility>
            <TrackVisibility className="right">
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div className="model-container">
                    <img src={logojm} alt="Logo" className="perfiljm" />
                  </div>
                </div>
              )}
            </TrackVisibility>
        </div>
      </div>
    </section>
  );
};