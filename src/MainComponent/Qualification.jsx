import { useState } from 'react';
import './Qualification.css';
import Button from 'react-bootstrap/Button';
import ShowOne from './ShowOne';
import ShowTwo from './ShowTwo';
import ShowThree from './ShowThree';


function Qualification() {

    const[show, setshow] = useState(1);
    const[open, setShow] = useState(false);
    const[opentwo, setShowtwo] = useState(false);
    const[openthree, setShowthree] = useState(false);


    const toggle = (index) =>{
        setshow(index);
    };
   
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleShowTwo = () => setShowtwo(true);
    const handleCloseTwo = () => setShowtwo(false);

    const handleShowThree = () => setShowthree(true);
    const handleCloseThree = () => setShowthree(false);
  
return (

    <><section className='quali-section'>
        {/* <h2 className='section-title'>Qualification</h2>
    <span className='section-subtitle'>My Journey</span> */}



        <div className="quali-container">
            
            <div className="quali-tabs">
               
                <div
                    className={show === 1
                        ? "quali-button quali-active"
                        : "quali-button"}
                    onClick={() => toggle(1)}
                >
                    <i className="uil uil-graduation-cap "></i>{" "} Experience
                </div>
                <div
                    className={show === 2
                        ? "quali-button quali-active"
                        : "quali-button"}
                    onClick={() => toggle(2)}
                >
                    <i className="uil uil-briefcase-alt "></i>{" "} Education
                </div>

            </div>
           

            <div className="quali-section">

                <div
                    className={show === 1
                        ? "quali-content quali-content-active"
                        : "quali-content"}>

                    <div className="quali-data">
                        <div>
                            <h3 className="quali-title">Product Management Intern</h3>
                            <span className="quali-subtitle">International AIDS Vaccine Initiatives - Missouri,USA</span>
                            <div className="quali-calender">
                                <i className="uil uil-calender-alt"></i> May 2023 - Present
                            </div><br></br>
                            <div>
                                <Button variant="dark" size="sm" onClick={handleShow}><i class='bx bx-message-dots'></i>show</Button>
                            </div>

                        </div>
                        <div>
                            <span className="quali-rounder"></span>
                            <span className="quali-line"></span>
                        </div>
                    </div>

                    <div className="quali-data">
                        <div></div>

                        <div>
                            <span className="quali-rounder"></span>
                            <span className="quali-line"></span>
                        </div>
                        <div>
                            <h3 className="quali-title">Programmer Analyst</h3>
                            <span className="quali-subtitle">Cognizant Technology Solutions - Chennai,India</span>
                            <div className="quali-calender">
                                <i className="uil uil-calender-alt"></i> Oct 2020 - July 2022
                            </div><br></br>
                            <div>
                                <Button variant="dark" size="sm" onClick={handleShowTwo}><i class='bx bx-message-dots'></i>show</Button>
                            </div>
                        </div>
                    </div>


                    <div className="quali-data">
                        <div>
                            <h3 className="quali-title">SharePoint Developer Intern</h3>
                            <span className="quali-subtitle">Cognizant Technology Solutions - Chennai,India</span>
                            <div className="quali-calender">
                                <i className="uil uil-calender-alt"></i> Jan 2020 - May 2020
                            </div><br></br>
                            <div>
                                <Button variant="dark" size="sm" onClick={handleShowThree}><i class='bx bx-message-dots'></i>show</Button>
                            </div>
                        </div>
                        <div>
                            <span className="quali-rounder"></span>
                            <span className="quali-line"></span>
                        </div>
                    </div>

                </div>

                <div
                    className={show === 2
                        ? "quali-content quali-content-active"
                        : "quali-content"}>

                    <div className="quali-data">
                        <div>
                            <h3 className="quali-title">Clemson University, South Carolina, USA</h3>
                            <span className="quali-subtitle">Master's Degree in Computer Science</span>
                            <div className="quali-calender">
                                <i className="uil uil-calender-alt"></i> 2022 - 2024
                            </div>
                        </div>
                        <div>
                            <span className="quali-rounder"></span>
                            <span className="quali-line"></span>
                        </div>
                    </div>

                    <div className="quali-data">
                        <div></div>

                        <div>
                            <span className="quali-rounder"></span>
                            <span className="quali-line"></span>
                        </div>

                        <div>
                            <h3 className="quali-title">Velammal Institute of Technology, India</h3>
                            <span className="quali-subtitle">Bachelor's Degree in Electronic and Communication</span>
                            <div className="quali-calender">
                                <i className="uil uil-calender-alt"></i> 2016 - 2020
                            </div>
                        </div>




                    </div>




                </div>



            </div>

        </div>
    </section>
    <ShowOne show={open} handleClose={handleClose} />
    <ShowTwo show={opentwo} handleClose={handleCloseTwo}/>
    <ShowThree show={openthree} handleClose={handleCloseThree}/>
    </>
  );
}

export default Qualification;