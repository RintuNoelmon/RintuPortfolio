import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import { useState } from 'react';
import './Header.css';
import Contact from './Contact'



function Header(){
    const [show, setShow] = useState(false);
    const [skill, setshow] = useState(false);

    
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    
    const ShowContact = () => setshow(true);
    const CloseContact = () => setshow(false);

    const handleClickSkills = (event) => {
      const classNameElement = document.querySelector('.skill-container'); // Replace 'classname' with the actual class name you want to scroll to
      if (classNameElement) {
        classNameElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    const handleClickQuaclification = (event) => {
      const classNameElement = document.querySelector('.quali-section'); // Replace 'classname' with the actual class name you want to scroll to
      if (classNameElement) {
        classNameElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleClickProjects = (event) => {
      const classNameElement = document.querySelector('.project_card'); // Replace 'classname' with the actual class name you want to scroll to
      if (classNameElement) {
        classNameElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
  return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand href="#home" className='color'>PORTFOLIO</Navbar.Brand>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"className='color'>Home</Nav.Link>

            {/* <Nav.Link onClick={handleShow}>About</Nav.Link> */}
            <Nav.Link onClick={handleClickSkills} className='color'>Skills</Nav.Link>

            <Nav.Link onClick={handleClickQuaclification} className='color'>Qualification</Nav.Link>
            <Nav.Link onClick={handleClickProjects} className='color'>Projects</Nav.Link>
            <Nav.Link onClick={ShowContact} className='color'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Contact show={skill} handleClose={CloseContact} />
    
    
    </>
  
    );
}

export default Header;
