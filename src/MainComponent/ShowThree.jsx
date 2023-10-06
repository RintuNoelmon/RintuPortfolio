import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ShowThree = ({ show, handleClose }) => {
  
return (
    <>
      <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
          <Modal.Title>Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ul>
<li><strong>*</strong> Acquired knowledge of Web Technologies and gained proficiency in HTML, CSS, Bootstrap, and JavaScript, with a specific emphasis on SharePoint Framework.</li>
<li><strong>*</strong> Successfully executed a project involving the development of SPFx web part with React Framework using Typescript and SharePoint Online. The project focused on developing a Sales system solution for a medium-sized automobile company.
</li>

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

export default ShowThree;