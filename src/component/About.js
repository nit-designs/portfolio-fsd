import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './Navbar';

const About = () => {
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
                            <h2>About Me</h2>
                            <p style={{ fontSize: '18px', fontStyle: "italic" }}> I'm a Full Stack Developer who can build you Full-stack web apps with React.js for frontend development and Node.js for Backend API development (REST API).</p>
                            <p style={{ fontSize: '18px', fontStyle: "italic" }}>I am a self-learner, curious and enthusiastic in learning new things. Curiosity is what makes a person think different. I think learning even a small thing as it seem can make a difference.</p>
                            <p  style={{ fontSize: '18px', fontStyle: "italic" }}>In my free time, I enjoy staying up-to-date with the latest industry trends and experimenting with new technologies. I’m always looking for new opportunities to grow and develop my skills as a full stack developer.</p>
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default About
