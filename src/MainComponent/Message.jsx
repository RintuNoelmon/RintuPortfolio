import React from 'react';
import './Message.css';
import 'boxicons';
import { useState } from 'react';
import axios from 'axios';


function Message() {
  
    const handleSubmit = async (e) => {
        alert("Message Sent");
        e.preventDefault();
        const { name, email,subject, message } = e.target.elements;
        let details = {
          name: name.value,
          email: email.value,
          subject:subject.value,
          message: message.value,
        };


        try {
            const response = await fetch('http://localhost:5016/contact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(details),
            });
      
            const data = await response.json();
            var mess = console.log(data); // Handle response data from backend
          }
          catch (error) {
            console.error(error);
          }

        

        // let response = await fetch("http://localhost:5008/contact", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json;charset=utf-8",
        //   },
        //   body: JSON.stringify(details),
        // });
        // console.log(response);
        // setStatus("Submit");
        // let result = await response.json();
        // alert(result.status);
    };
  

  return (
   <>

      <div className='message-container'>
        <h2 className='message-title'></h2>

        <div className='message-grid'>
            <div>
                <h2 className='message-title'>Get In Touch<i class='bx bx-cool'></i></h2>
                <h3 className='contact-title'>Let's talk about Open Source Contributions</h3>
                <p className='contact-title'>Send me an Email</p>
            </div>

            <form className='message-form' onSubmit={handleSubmit}>
                <div className='message-group'>
                    <div className='message-div'>
                        <input type="text" className='message-input' placeholder='Insert your Name' 
                        id="name"
                       
                        ></input>
                    </div>
                    <div className='message-div'>
                        <input type="email" className='message-input' placeholder='Insert your Email' 
                        id="email"
                       
                        ></input>
                    </div>
                </div>
                    <div className='message-div'>
                        <input type="text" className='message-input' placeholder='Insert your Subject' 
                        id="subject"
                       
                        ></input>
                    </div>
                    <div className='message-div'>
                        <textarea cols="30" rows="10" className='message-input' placeholder='Write your message' 
                        id="message"
                       
                        ></textarea>
                    </div><br></br>

                <div><button  type="submit" className='button' variant="info">Send Message <i class='bx bx-paper-plane'></i></button></div>
               
            </form>


        </div>

      </div>
   
    </>
  );
}

export default Message;
