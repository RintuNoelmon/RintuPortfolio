import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Navbar, Nav, Container } from 'react-bootstrap'; 

const Contact = ({ show, handleClose }) => {
  
return (
    <>
      <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
            <Modal.Body className='contact_icons'> 
            <dl>
            <i class='bx bxs-envelope'></i><dd>rintunoel27@gmail.com</dd>
            <i class='bx bxl-linkedin-square' ></i><dd><a href="#www.linkedin.com/in/rintu-noelmon">www.linkedin.com/in/rintu-noelmon</a></dd>
            <i class='bx bxs-location-plus' ></i><dd>Clemson, South Carolina</dd>
            </dl>     
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Contact;