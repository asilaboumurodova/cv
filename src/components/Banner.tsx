import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import AsilaBoymurodovaPhoto from '../assets/images/AsilaBoymurodova-image-removebg-preview.png'
import cloud from '../assets/images/cloud.webp'
import bannerImage from "../assets/images/banner-bg.png"
import resume from "../assets/files/Asila_Boymurodova_resume.pdf"

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Frontend Developer"];
    const period = 1500;
    console.log(index)
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home" style={{
            background: `url(${bannerImage}) center / cover no-repeat`,
        }}>
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>Hi! I'm Asila</h1>
                                    <h1><span className="txt-rotate" data-period="1000" data-rotate='[ "Frontend Developer" ]'><span className="wrap">{text}</span></span></h1>
                                    <a href={resume} download="Asila_Boymurodova_resume.pdf">Download my resume</a>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated" : ""}>
                                    <div className='image-container'>
                                        <img src={AsilaBoymurodovaPhoto} alt="AsilaBoymurodova_profile-photo" />
                                        <img src={cloud} alt="cloud" className="overlay-image" />
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner