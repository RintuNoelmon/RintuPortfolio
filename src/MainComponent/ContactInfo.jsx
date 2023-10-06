import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import logo from './Image.png';
import './ContactInfo.css';
import { Button, Row, Col } from 'react-bootstrap';




function ContactInfo() {
  const handleDownload = () => {
    const resumeFilePath = '/Resume-Rintu.pdf';
    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.download = 'Resume.pdf'; 
    link.click();
  };


    return (
      <Container className="container">

        <div>
          <Col className="left-corner">
            <Row className='header-icons'>
              <i class='bx bxl-instagram' ></i>
              <i class='bx bxl-github' ></i>
              <i class='bx bxl-linkedin-square' ></i>
              
            </Row>
        </Col>
        </div>
        
      <Row>
        <Col md={4} className="text-center">
          <Figure>
            <Figure.Image
              width={230}
              height={230}
              alt="Logo"
              src={logo} 
              roundedCircle
              className="right-corner"
            />
          </Figure>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="text-center">
          <Button variant="dark"  className="text-corner" onClick={handleDownload} ><i class='bx bx-cloud-download'></i>Download CV</Button> 
        </Col>
      </Row>
    </Container>
   
        
    );
  }
  
  export default ContactInfo;
  