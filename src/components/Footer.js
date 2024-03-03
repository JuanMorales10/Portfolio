import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logoojm.png";
import { faGithub , faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon foo">
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
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
