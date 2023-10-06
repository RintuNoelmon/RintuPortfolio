import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ShowTwo = ({ show, handleClose }) => {
  
return (
    <>
      <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
          <Modal.Title>Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ul>
<li><strong>*</strong> Served as a SharePoint Developer responsible for developing a Search Application for the World Bank Group using C# (.NET Framework).</li>
<li><strong>*</strong> Integrated C# with SharePoint, SQL, and Azure to enable REST API calls, Data Storage, and Cloud computing services for the search engine.</li>
<li><strong>*</strong> Developed and tested C# code to meet the requirements specified by the business team, effectively supporting job responsibilities.</li>
<li><strong>*</strong> Contributed to the ITSOP Dashboard project by utilizing SPFx (client-side web part) to create distinct dashboards for resource deployment.</li>
<li><strong>*</strong> Certified in Azure to enhance proficiency in developing the search application.</li>
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

export default ShowTwo;