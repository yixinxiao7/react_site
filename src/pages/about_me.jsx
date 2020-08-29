import React from 'react';
import {Button, Row, Col, Container, Image, Card, Overlay, Tooltip} from 'react-bootstrap';
import SchoolLogo from '../images/m.png';
import Me from '../images/final_me.png';
import './css/about_me.css';
import './css/global_comp.css';
import Resume from '../resume/Resume.pdf';
import {renderNavBar} from '../global_component/nav_bar.jsx';
import {FaGlasses, FaRobot} from "react-icons/fa";
import {IoIosPhonePortrait, IoIosMail,IoLogoLinkedin} from "react-icons/io";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';


function Example() {
    const [show, setShow] = React.useState(false);
    const target = React.useRef(null);
  
    return (
      <>
      <i class="fa fa-phone" Style="font-size:36px; padding-right:2%;" ref={target} onClick={() => setShow(!show)}></i>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              301-541-9605
            </Tooltip>
          )}
        </Overlay>
      </>
    );
}
  
const renderIntro = () =>{
    return(
        <div className="center">
            <h2>
                Here's me!
            </h2>
            <ul>
                <li>Motivated: I intrinsically seek to learn more and better myself.</li>
                <li>Resilient: Failure doesn't scare me. The bounce back initiates learning and improvement.</li>
                <li>Active: I enjoy hiking, exercising, traveling, and listening/playing music.</li>
                <li>Maryland-based: So as one may expect, I love crabs. But I'm all open for relocating!</li>
                <li>Corgi-lover: Don't get me wrong. I love almost all animals. But corgis are EXTRA cute.</li>
            </ul>
            <h3>Check out my <a href={Resume} target="_blank">resume</a>! If you're interested, feel free to contact me.</h3>
            <div>
                <a href="https://github.com/yixinxiao7" target="_blank">
                    <i class="fa fa-github" Style="font-size:36px; padding-right:2%;"/>
                </a>
                <a href="https://www.linkedin.com/in/yixin-xiao-4851a2163/" target="_blank">
                    <i class="fa fa-linkedin-square" aria-hidden="true" Style="font-size:36px; padding-right:2%;"/>
                </a>
                <Example />
                
                <a href="mailto:yixinx@umich.edu" target="_blank">
                    <i class="fa fa-envelope" Style="font-size:36px; padding-right:2%;"/>
                </a>
                
                
            </div>
        </div>
    );
}
const renderEducation = () =>{
    return(
        <div align="center" className="education-text">
            <h2 Style="color:#FBEC5D;"> 
                University of Michigan
            </h2>
            <h3>
                Degree: Bachelor's (Pursuing)
                <br/>
                4th year student
                <br/>
                Major: Computer Science Engineering
                <br/>
                Minor: Business
            </h3>
        </div>
    );
}

const renderWorkExp=()=>{
    return(
        <VerticalTimeline layout="1-column">
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2020 - August 2020"
            iconStyle={{ background: '#45A29E', color: '#0B0C10' }}
            icon={<FaRobot />}
        >
            <h3 className="vertical-timeline-element-title db-text">Capital One</h3>
            <h4 className="vertical-timeline-element-subtitle db-text">Software Engineering Intern</h4>
            <hr className="line-db"></hr>
            <p >
                At Capital One I worked on a business-facing application focused on automating fraud compliance processes. The application helps users not only assign compliance tasks/issues to sofware teams via JIRA (Atlassian's agile-focused, work-management tool), but also provides detailed and visual analytics about ongoing compliance tasks.
            </p>
            <p>
                Utilizing Java + Spring Boot, I developed a RESTful API that interacts with both external (JIRA) and internal Capital One services. Users can create/edit JIRA epics and assign them to dynamically-updated teams and retrieve parsed information about ongoing fraud tasks in real time. I leveraged AngularJS to develop a corresponding UI that allows users to interact with the backend; examples include a form that they can send over to the API to create an epic as well as a grid that displays data such as current progress on the epics and their corresponding stories.
            </p>
            <p>
                To boost the security of the application, I implemented SSO that features single-use tokens and user logging to limit users to Capital One employees. Furthermore, I used Capital One's key management system to prevent project secrets from leaking out of the code source. 
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2019 - August 2019"
            iconStyle={{ background: '#45A29E', color: '#0B0C10' }}
            icon={<FaGlasses />}
        >
            <h3 className="vertical-timeline-element-title db-text">Applied Research Associates</h3>
            <h4 className="vertical-timeline-element-subtitle db-text">Scientific Programming Software Engineering Intern</h4>
            <hr className="line-db"></hr>
            <p>
                At ARA, I worked on refactoring a legacy simulation program with over 100,000 LOC and 25 years of development. This was an interesting challenge as the interdiscliplinary project involved both software and scientific concepts and practices.
            </p>
            <p>
                Throughout the summer I worked on merging two separate code databases, and constructing a <a href="https://en.wikipedia.org/wiki/Dynamic-link_library" target="_blank">Dynamic-Link Library</a> that would allow different driver programs to use specific components of functions. Using Fortran (yes, Fortran), I developed my first API that maintained the functionality of the existing GUI for the program and allowed users to run simulations with unique parameters. To make data manipulation/interaction easier on users, I revamped the I/O system such that data would be stored in memory rather than outputted to text files, allowing users to retrieve data in-program directly after a simulation run.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2018 - August 2018"
            iconStyle={{ background: '#45A29E', color: '#0B0C10' }}
            icon={<FaGlasses />}
        >
            <h3 className="vertical-timeline-element-title db-text">Posterity Group</h3>
            <h4 className="vertical-timeline-element-subtitle db-text">Project Management / IT Intern</h4>
            <hr className="line-db"></hr>
            <p>
                During this internship, I had the chance to work both on PM and IT tasks. With the business undergoing a transformative change in its hiring process, I was able to play a key role in expediting this by documenting the current process, identifying issues and developing goals to remediate those. These were done through a series of meetings involving the CEO, COO and other project managers, where I also aplied Poka Yoke and other Six Sigma concepts to promote quality assurance for future steps.
            </p>
            <p>
                On the IT side, I used tools such as Javascript and Microsoft Flow to automate and accelerate office workflows, produce more efficient interdepartmental work cycles and further promote QA.
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
    );
}
const renderResearchExp=()=>{
    return(
        <VerticalTimeline layout="1-column">
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - present"
            iconStyle={{ background: '#45A29E', color: '#0B0C10' }}
            icon={<FaRobot />}
        >
            <h3 className="vertical-timeline-element-title db-text">Crowds and Machines Lab</h3>
            <h4 className="vertical-timeline-element-subtitle db-text">Undergraduate Research Assistant</h4>
            <hr className="line-db"></hr>
            <p >
            
            From 2018-2019, my research centered around machine learning with a focus on active learning and deep learning. The focus of my project was to make a meta learner to select the best active leaning strategy to train a machine learning model depending on its training stage, in order to achieve a fast-learning and accurate model. 
            <br/><br/>
            I developed a flexible wrapper class for both custom and Pytorch convolution neural networks, with an API similar to that found on scikit-learn models. This wrapper class was used to develop the experimental pipeline, building part of the foundation of the research project.

            <br/><br/>
            Additionally, I worked on expanding the current datasets being used for the experiments,by adding Twenty News (text dataset). I leveraged the raw text data anyone can retrieve from scikit-learn, and converted it into an adapted, inerhited class from our main data loader class, following the structure of the class hierarchy. This will allow for other machine learning problems, such as Natural Language Processing, to be tested with the metalearner.   
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2018"
            iconStyle={{ background: '#45A29E', color: '#0B0C10' }}
            icon={<FaGlasses />}
        >
            <h3 className="vertical-timeline-element-title db-text">University of Michigan</h3>
            <h4 className="vertical-timeline-element-subtitle db-text">Undergraduate Research Assistant</h4>
            <hr className="line-db"></hr>
            <p>
            From 2017-2018, I conducted research on Bluetooth technology and augmented reality (AR). During the first half of the year, the goal was to enable Bluetooth functionality into everyday goods. To test this, I worked with an arduino to remotely light up the adafruit neopixel (led lights).
            <br/><br/>
            During the second half, I worked with augmented reality to test its impact on the domestic manufacturing process and industrial design. Due to the very general and exploratory nature of the research topic, I focused on setting up on the foundation of the project— I created an augmented reality application using apple’s ARKit, which allows users place and remove and .obj file onto any detected planes. This will help with architectural analysis and can be easily extended or modified to perform other tasks.
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
    );
}

const renderCards=()=>{    
    return(
        <Container>
            <Row Style="padding-top:1%; padding-bottom: 1%;">
                <Col>
                    <Card style={{ width: '18rem' }} Style="margin-left:auto; margin-right:auto;">
                        <Card.Header className="lgreen-colored"/>
                        <Card.Body className="dgreen-colored">
                            <Card.Title className="light-green">Best Donut Delivery Route</Card.Title>
                            <Card.Text className="light-grey">
                            Graphs, Minimum Spanning Trees, and the Traveling Salesman problem algorithms and heuristics.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="lgreen-colored">
                        <a href='https://github.com/yixinxiao7/MST-TSP.git' target='_blank'>
                            <Button variant="outline-light" className="mt-2">See Project</Button>
                        </a>
                        </Card.Footer>
                    </Card>    
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }} Style="margin-left:auto; margin-right:auto">
                        <Card.Header className="lgreen-colored"/>
                        <Card.Body className="dgreen-colored">
                            <Card.Title className="light-green">Stock Market Simulation as Star Wars</Card.Title>
                            <Card.Text className="light-grey">
                                Stacks, Queues, and the Running Median algorithm. Also, the heap implemented 3 different ways: pairing, binary, and sorted.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="lgreen-colored">
                        <a href="https://github.com/yixinxiao7/Stock-Market-Simulation.git" target='_blank'>
                            <Button variant="outline-light" className="mt-2">See Project</Button>
                        </a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row Style="padding-bottom: 1%;">    
                <Col>
                    <Card style={{ width: '18rem' }} Style="margin-left:auto; margin-right:auto">
                        <Card.Header className="lgreen-colored"/>
                        <Card.Body className="dgreen-colored">
                            <Card.Title className="light-green">Log Manager</Card.Title>
                            <Card.Text className="light-grey">
                                Hash tables, vectors, deques, and sorting algorithms!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="lgreen-colored">
                        <a href="https://github.com/yixinxiao7/Log-Manager.git" target='_blank'>
                            <Button variant="outline-light" className="mt-2">See Project</Button>
                        </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }} Style="margin-left:auto; margin-right:auto">
                        <Card.Header className="lgreen-colored"/>
                        <Card.Body className="dgreen-colored">
                            <Card.Title className="light-green">Puzzle Solver</Card.Title>
                            <Card.Text className="light-grey">
                                Depth first search, Breadth first search, and backtracking algorithms!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="lgreen-colored">
                        <a href="https://github.com/yixinxiao7/Puzzle-Solver.git" target='_blank'>
                            <Button variant="outline-light" className="mt-2">See Project</Button>
                        </a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );    
}

export default class AboutMe extends React.Component{
    render(){
        return(
            <Container className="full-screen">
                <Row>
                    <Col>{renderNavBar()}</Col>
                </Row>
                {/* <Row>{renderPicture()}</Row> */}
                <Row className="flex-grow-1">
                    <Col sm={5}>
                        <Image src={Me} className="responsive"/>
                    </Col>
                    <Col sm={7}>
                        {renderIntro()}
                    </Col>
                </Row>
                <Row className="lgreen-colored">
                    <Col xs={5} sm={4}>
                        <Image src={SchoolLogo} className="michigan-logo center"/>
                    </Col>
                    <Col xs={7} sm={8}>
                        {renderEducation()}
                    </Col>
                </Row>
                <Row className="dgreen-colored">
                    <h2 className="experience-header light-grey">
                        Work Experience
                    </h2>            
                    {renderWorkExp()}
                </Row>
                <Row className="lgrey-colored">
                    <h2 className="experience-header dark-green">
                        Research Experience
                    </h2>            
                    {renderResearchExp()}
                </Row>
                <Row className="dgrey-colored">
                    <div className="experience-header">
                        <h2 className="light-green" Style="text-align:center">
                            Projects
                        </h2>
                        <p className="light-grey" Style="text-align:center">
                            Here's a list of my data structures and algorithm-focused projects! To see a list of all my projects, check out my GitHub page.
                        </p>
                    </div>
                    {renderCards()}
                </Row>
            </Container>
        );
    }
}