import React from 'react';
import './Skill.css';
import 'boxicons';


function Skill() {
  return (
   <>

        <div class="skill-container">
           <div class="skill-box">
                <div class="skill-form">
                    <div class="skill-content">
                       <h6 className="skill-title">Frontend Developer</h6>

                        <div className='skill-split'>
                            <div className='skill-group'>
                               <div className='skill-data'>
                                  <i class='bx bxl-html5'></i>

                                  <div>
                                  <h6 className='skill-name'>HTML</h6>
                                  <span className='skill-level'>Advanced</span>
                                  </div>
                               </div>

                               <div className='skill-data'>
                         <i class='bx bxl-css3' ></i>
                         <div>
                            <h6 className='skill-name'>CSS</h6>
                            <span className='skill-level'>Intermediate</span>
                         </div>
                               </div>
                               <div className='skill-data'>
                         <i class='bx bxl-javascript' ></i>
                         <div>
                            <h6 className='skill-name'>JavaScript</h6>
                            <span className='skill-level'>Intermediate</span>
                         </div>
                               </div>
                               <div className='skill-data'>
                               <i class='bx bxl-react'></i>
                         <div>
                            <h6 className='skill-name'>React JS</h6>
                            <span className='skill-level'>Advanced</span>
                         </div>
                               </div>
                            </div>
                            
                            <div className='skill-group'>
                                <div className='skill-data'>
                                <i class='bx bxl-typescript'></i>
                         <div>
                            <h6 className='skill-name'>TypeScript</h6>
                            <span className='skill-level'>Beginner</span>
                         </div>
                                </div>
                                {/* <div className='skill-data'>
                         <i class='bx bxl-css3' ></i>
                         <div>
                            <h6 className='skill-name'>CSS</h6>
                            <span className='skill-level'>Intermediate</span>
                         </div>
                                </div>
                                <div className='skill-data'>
                         <i class='bx bxl-javascript' ></i>
                         <div>
                            <h6 className='skill-name'>JavaScript</h6>
                            <span className='skill-level'>Intermediate</span>
                         </div>
                                </div> */}
                            </div>

                        </div>
                       
                       
                   </div>
                </div>
            </div>
            <div class="skill-box">
                <div class="skill-form">
                    <div class="skill-content">
                        <h6 className="skill-title">Backend Developer</h6>
                        <div className='skill-split'>
                            <div className='skill-group'>
                                <div className='skill-data'>
                          <i class='bx bxl-nodejs' ></i>
                         <div>
                            <h6 className='skill-name'>Node JS</h6>
                            <span className='skill-level'>Intermediate</span>
                         </div>
                                </div>
                                <div className='skill-data'>
                          <i class='bx bxl-python' ></i>
                         <div>
                            <h6 className='skill-name'>Python</h6>
                            <span className='skill-level'>Beginner</span>
                         </div>
                                </div>
                                <div className='skill-data'>
                          <i class='bx bxs-badge-check' ></i>
                         <div>
                            <h6 className='skill-name'>MySQL</h6>
                            <span className='skill-level'>Advanced</span>
                         </div>
                                </div>
                                <div className='skill-data'>
                          <i class='bx bxs-badge-check' ></i>
                         <div>
                            <h6 className='skill-name'>C sharp</h6>
                            <span className='skill-level'>Intermediate</span>
                         </div>
                                </div>
                            </div>

                            {/* <div className='skill-group'>
                       <div className='skill-data'>
                         <i class='bx bxl-html5'></i>
                         <div>
                            <h6 className='skill-name'>HTML</h6>
                            <span className='skill-level'>Advanced</span>
                         </div>
                       </div>
                       <div className='skill-data'>
                         <i class='bx bxl-css3' ></i>
                         <div>
                            <h6 className='skill-name'>CSS</h6>
                            <span className='skill-level'>Intermediate</span>
                         </div>
                       </div>
                       <div className='skill-data'>
                         <i class='bx bxl-javascript' ></i>
                         <div>
                            <h6 className='skill-name'>JavaScript</h6>
                            <span className='skill-level'>Intermediate</span>
                         </div>
                       </div>
                            </div> */}


                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
   
   
    </>
  );
}

export default Skill;
