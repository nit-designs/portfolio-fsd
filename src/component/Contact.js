import React from 'react';
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';

const Contact = () => {
    const handleClick = () => {
        const myEmail = 'nithyae27@gmail.com';
        window.location.href = `mailto:${myEmail}`;
    };

    return (
        <div >
            <Navbar />
            
            <div className='contact_container'  >
                <h1 >Get In Touch</h1>
                <h5>
                Want to work together or have any questions?
                </h5>
                
            <br />
                <Button variant="outline-primary" size='lg' onClick={handleClick}>
                    Say me an Email
                </Button>              
            </div>
            
            <br />
            <div>
            <h5>Or connect with me :</h5>
            </div>
            <div className='social_links'>
            
                            <span className='mr-3'>
                            <Button variant="link" onClick={() => window.open('https://www.linkedin.com/in/nithya-eswaran-a21839229/')}>
                                    <img
                                        src='https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw'
                                        alt='LinkedIn Logo'
                                        className='image_size me-3'
                                    />
                                </Button>

                            </span>

                            <span className='mr-3'>
                            <Button variant="link" onClick={() => window.open('https://github.com/nit-designs')}>
                              
                                    <img
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0Uu0auB-_30X62d-vUYM-jhN4TkqPqgv6A&usqp=CAU'
                                        alt='github logo'
                                        className='image_size'
                                    />
                                </Button>
                            </span>

                            <span className='mr-3'>
                                   <Button variant="link"onClick={handleClick}>
                                    <img
                                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/2048px-Mail_%28iOS%29.svg.png'
                                        alt='mail logo'
                                        className='image_size'
                                    />
                                </Button>
                            </span>
                                                      
                            </div>


        </div>
    );
};

export default Contact;
