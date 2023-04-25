import React from 'react';
import Navbar from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Home = () => {
    const handleClick = () => {
        const myEmail = 'nithyae27@gmail.com';
        window.location.href = `mailto:${myEmail}`;
    };



    return (
        <div>
            <Navbar />
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='text-center'>

                        <img src="https://avatars.githubusercontent.com/u/121877326?v=4" alt="girl with laptop" className='about-image'></img>

                    </Col>
                    <Col md={6}>
                        <div className='text-center'>
                            <h1><span style={{ color: "Blue" }}>Hi </span>I'm NITHYA </h1>
                            <h5>Full Stack Developer</h5>


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
                                <Button variant="link" onClick={handleClick}>
                                    <img
                                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/2048px-Mail_%28iOS%29.svg.png'
                                        alt='mail logo'
                                        className='image_size'
                                    />
                                </Button>
                            </span>

                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
