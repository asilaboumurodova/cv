import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import projImg1 from "../../assets/images/project-img1.png";
import projImg2 from "../../assets/images/project-img2.png";
import projImg3 from "../../assets/images/project-img3.png";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Chat App",
      description: "Opportunity to send text and photos like a chat",
      imgUrl: projImg1,
      projectUrl: 'https://chat-rouge-two.vercel.app/'
    },
    {
      title: "E-commerce",
      description: "Furniture shop",
      imgUrl: projImg2,
      projectUrl: 'https://furniture-shop-42eq.vercel.app/'
    },
    {
      title: "Movie site",
      description: "Information about new movies",
      imgUrl: projImg3,
      projectUrl: 'https://movies-six-iota.vercel.app/'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    I have studied in Proweb IT-learning centre between from July 2023 to May 2024, and here are some of the projects I did during the learning process; I joined to a company Smartcast as an intern in July 2024 and learnt so many new things, and the project that was given to me is based on Tizen, soon I will share the results; Starting from January 2025 I got hired to an Asgardia Team!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          <ProjectCard {...projects[0]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard {...projects[1]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <ProjectCard {...projects[2]} />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
