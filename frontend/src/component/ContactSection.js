import React from 'react';
import Title from './Title';
const ContactSection = () => {
  return (
    <div id='contact'>
      <Title content={'Contact Me'} />
      <div
        id='ContactSection'
        data-aos='slide-up'
        data-aos-offset='100'
        data-aos-easing='linear'
        data-aos-duration='1000'
        data-aos-once='true'
      >
        <div className='container contactflex'>
          <div className='contact_form'>
            <div
              className='contact_title'
              data-aos='fade-left'
              data-aos-offset='100'
              data-aos-delay='400'
              data-aos-easing='linear'
              data-aos-duration='1000'
              data-aos-once='true'
            >
              Contact Details
            </div>
            <form action=''>
              <div
                className='contact_Name'
                data-aos='fade-left'
                data-aos-offset='100'
                data-aos-delay='400'
                data-aos-easing='linear'
                data-aos-duration='1000'
                data-aos-once='true'
              >
                <label className='subcontact_title' htmlFor=''>
                  Name
                </label>
                <input type='text' placeholder='Enter Your Name' required />
              </div>
              <div
                className='contact_Email'
                data-aos='fade-left'
                data-aos-offset='100'
                data-aos-delay='400'
                data-aos-easing='linear'
                data-aos-duration='1000'
                data-aos-once='true'
              >
                <label className='subcontact_title' htmlFor=''>
                  Email
                </label>
                <input type='text' placeholder='Enter Your Email' required />
              </div>
              <div
                className='contact_Message'
                data-aos='fade-left'
                data-aos-offset='100'
                data-aos-delay='400'
                data-aos-easing='linear'
                data-aos-duration='1000'
                data-aos-once='true'
              >
                <label className='subcontact_title' htmlFor=''>
                  Message
                </label>
                <textarea
                  type='textarea '
                  placeholder='Enter Your Message'
                  required
                />
              </div>
              <div
                className='contactBtn'
                data-aos='fade-left'
                data-aos-offset='100'
                data-aos-delay='400'
                data-aos-easing='linear'
                data-aos-duration='1000'
                data-aos-once='true'
              >
                <button>submit</button>
              </div>
            </form>
          </div>
          <div className='contact_detail'>
            <div
              className='contact_subdetail'
              data-aos='fade-right'
              data-aos-offset='100'
              data-aos-delay='400'
              data-aos-easing='linear'
              data-aos-duration='1000'
              data-aos-once='true'
            >
              <div className='subcontact_title'>Quick Link</div>
              <div className='subcontact_answer'>
                <a href='#app'>Home</a> <a href='#about'>About</a>
                <a href='#skill'>Skills</a>
                <a href='#ProjectSection'>Project</a>
              </div>
            </div>
            <div
              className='contact_subdetail'
              data-aos='fade-right'
              data-aos-offset='100'
              data-aos-delay='400'
              data-aos-easing='linear'
              data-aos-duration='1000'
              data-aos-once='true'
            >
              <div className='subcontact_title'>Email Address</div>
              <div className='subcontact_answer'> msdesai32@gmail.com</div>
            </div>
            <div
              className='contact_subdetail'
              data-aos='fade-right'
              data-aos-offset='100'
              data-aos-delay='400'
              data-aos-easing='linear'
              data-aos-duration='1000'
              data-aos-once='true'
            >
              <div className='subcontact_title'>Mobile Contact</div>
              <div className='subcontact_answer'> 9372191971</div>
            </div>
            <div
              className='contact_subdetail'
              data-aos='fade-right'
              data-aos-offset='100'
              data-aos-delay='400'
              data-aos-easing='linear'
              data-aos-duration='1000'
              data-aos-once='true'
            >
              <div className='subcontact_title'>Based In</div>
              <div className='subcontact_answer'> Mumbai, Maharashtra</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
