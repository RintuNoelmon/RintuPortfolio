import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Footer.css';

function Footer(){
    
  return(
        <>
       <footer className='footerStyle'>
      <div>
         <h2 className='footer-title'>Rintu Noelmon</h2>
         <div className='footer-skill'>
           <p>About</p>
           <p>Skills</p>
           <p>Projects</p>
         </div>
         <div className='footer-icons'>
                
                <div>
                   <i class='bx bxl-instagram'></i>
                    <a href="https://www.instagram.com/"className='skill-level'>Instagram</a>
                </div>
                <div>
                    <i class='bx bxl-linkedin-square' ></i>
                    <a href="https://www.linkedin.com/in/rintu-noelmon/"className='skill-level'>LinkedIn</a>
                </div>
                <div>
                    <i class='bx bxl-github' ></i>
                    <a href="https://github.com/"className='skill-level'>GitHub</a>
                </div>

         </div>
         <div className='footer-rights'>
            <p>@RintuNoelmon. All rights reserved</p>
         </div>

      </div>
      
       </footer>
    
    </>
  
    );
}





export default Footer;
