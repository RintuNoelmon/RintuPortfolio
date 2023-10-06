import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ShowOne = ({ show, handleClose }) => {
  
return (
    <>
      <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
          <Modal.Title>Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ul>
  <li><strong>*</strong> Identify, evaluate, and build data analytics pipelines (Ex. Data mining, visualization of project, program, and portfolio data) for vaccine projects.</li>
  <li><strong>*</strong> Developed software solutions to seamlessly integrate vaccine project, program, and portfolio data, creating dynamic dashboards for real-time visualization and analysis of projects, programs, and portfolios.Tea</li>
        </ul>
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

export default ShowOne;