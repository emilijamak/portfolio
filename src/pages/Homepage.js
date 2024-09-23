import {useEffect, useState} from 'react';
import shipAppCover from '../images/Screenshot 2024-08-14 084638.png'
import shipAppImg1 from '../images/Screenshot 2024-08-14 084733.png'
import shipAppImg2 from '../images/Screenshot 2024-08-14 084812.png'
import shipAppImg3 from '../images/Screenshot 2024-08-14 085147.png'
import myPicture from '../images/IMG_1510 - Copy.JPG'
import chatAppCover from '../images/chat1.png'
import '../App.css'
import '../style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillComp from "../components/SkillComp";
import {useNavigate} from "react-router-dom";

function App() {

    const [activeIndex, setActiveIndex] = useState(0)
    const nav = useNavigate()
    const [leaveTimeout, setLeaveTimeout] = useState(null);



    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.nav');
            if (window.scrollY > 30) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const svg1 = `
<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor"
     className="bi bi-bookmarks" viewBox="0 0 16 16">
    <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"/>
    <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"/>
</svg>`;

    const svg2 = `
<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor"
     className="bi bi-code-slash" viewBox="0 0 16 16">
    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
</svg>`;

    const svg3 = `
<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor"
     className="bi bi-laptop" viewBox="0 0 16 16">
    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
</svg>`;

    const svg4 = `
<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg>`;

    const svgArrow = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>`;


    const jobs = [

        {
            svg: svg2,
            name: 'Web development',
            description: 'I create dynamic websites using React, Node.js, and Next.js, ensuring a seamless user experience and robust performance tailored to meet your specific needs'
        },
        {
            svg: svg3,
            name: 'Responsive design',
            description: 'I create responsive designs that deliver a seamless experience across all devices and screen sizes.'
        },
        {
            svg: svg1,
            name: 'UI/UX design',
            description: 'I design intuitive UI/UX experiences that prioritize user needs, making interactions simple, engaging, and visually appealing.'
        },
        {
            svg: svg4,
            name: 'Dedicated support',
            description: 'I provide dedicated support to ensure your project runs smoothly, addressing any issues promptly and offering assistance whenever needed.'
        },
    ];

    const skills = [
        {
            name: 'HTML',
            percent: 95
        },
        {
            name: 'CSS',
            percent: 75
        },
        {
            name: 'JAVASCRIPT',
            percent: 75
        },
        {
            name: 'REACT',
            percent: 75
        },
        {
            name: 'NODE',
            percent: 65
        },
        {
            name: 'NEXT',
            percent: 65
        },
    ]

    const projects = [
        {
            name: 'Siunti Veži',
            link: 'siuntivezi',
            task: 'Web developer',
            coverImage: shipAppCover,
            images: [shipAppImg1, shipAppImg2, shipAppImg3],

        },
        {
            name: 'Chat App',
            link: 'chatApp',
            task: 'Front-End developer',
            coverImage: chatAppCover,
            images: ['https://t4.ftcdn.net/jpg/02/61/85/87/360_F_261858765_M5Lett2WHU79JrGhQQgo1sGVqcDa9JuL.jpg', 'https://wallpapers.com/images/hd/albania-4032-x-2268-background-0tpc2tfnnir8taij.jpg', 'https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5adf77af6eabcc00190b75b6/5da6e1e181811e13cf5cfd42/files/albanian-riviera-backpacking-itinerary-main-image-hd-op.jpg'],

        }
    ]
    const [currentProject, setCurrentProject] = useState(projects[0])


    const handleMouseEnter = (i) => {
        // Clear any existing timeout to prevent unintended behavior
        if (leaveTimeout) {
            clearTimeout(leaveTimeout);
            setLeaveTimeout(null);
        }
        setActiveIndex(i);
        setCurrentProject(projects[i]);
    };

    const handleMouseLeave = () => {
        // Set a timeout to clear the project details after 1 second
        const timeoutId = setTimeout(() => {
            setActiveIndex(0);
            setCurrentProject(projects[0]);
        }, 500); // 1 second delay
        setLeaveTimeout(timeoutId);
    };

    // Cleanup timeout on component unmount or before setting a new timeout
    useEffect(() => {
        return () => {
            if (leaveTimeout) {
                clearTimeout(leaveTimeout);
            }
        };
    }, [leaveTimeout]);

    return (
        <div className="App">
            <div className="header">
                <div className="headerBG">
                    <div id={'start'} className="nav p-3 d-flex justify-content-around ">
                        <div></div>
                        <div className="">
                            <ul className="sm:flex gap-3 mb-0 hidden">
                                <li className="me-3">
                                    <a href="#start">Home</a>
                                </li>
                                <li className="me-3">
                                    <a href="#about-me">About</a>
                                </li>
                                <li className="me-3">
                                    <a href="#service">Service</a>
                                </li>
                                <li className="me-3">
                                    <a href="#projects">Projects</a>
                                </li>
                                <li className="me-3">
                                    <a href="#contact">Contact Info</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bigText w-100 h-100 justify-content-center align-items-center d-flex flex-column">
                        <h1>Front-End Developer For </h1>
                        <h1>Your Next Project</h1>
                    </div>
                </div>
            </div>
            <div id={'about-me'} className="introduction p-3 lg:container flex lg:flex-row flex-col mt-5 pb-5">
                <div className="d-flex flex1 p-5">
                    <img
                        src={myPicture}
                        alt="" className="profile-pic w-100"/>
                </div>
                <div className="d-flex flex1 flex-column text-start lg:py-5 lg:mx-0 mx-5">
                    <p className="lead">Hello</p>
                    <p className="bold-text m-0">I am Emilija Makaravičiūtė, </p>
                    <p className="bold-text m-0">Frontend Developer</p>
                    <p className="bold-text m-0">from Vilnius, Lithuania</p>
                    <p className="mt-3">I have recently completed <span className={'font-semibold'}>Code Academy </span>Junior Front-end TypeScript developer studies. I am enthusiastic about embarking on my career as a Front-end Web Developer. With a strong commitment to continuous learning and improvement, I am eager to contribute to innovative projects and leverage my skills to create engaging and effective web solutions.</p>
                    <p className="m-1"><span style={{color: '#e74050'}} className="">Mail: </span>em.makaraviciute@gmail.com</p>
                    <p className="m-1"><span style={{color: '#e74050'}} className="">Phone: </span>+37064562756</p>
                    <a href="#contact" className="hire-me py-3 px-5 w-50 mt-3 cursor ">HIRE ME</a>
                </div>
            </div>
            <div className="education-container p-5">
                <div className="flex lg:flex-row flex-col gap-5 lg:gap-0 container justify-content-around">
                    <div className="d-flex flex-column gap-3 text-start flex1 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                             className="bi bi-book mb-2" viewBox="0 0 16 16">
                            <path
                                d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                        </svg>
                        <h4>Education</h4>
                        <hr/>
                        <div className="d-flex flex-column">
                            <p className="bold">Code Academy</p>
                            <p className="">Studijos 101</p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="bold">Code Academy</p>
                            <p className="">Typescript Junior Front-End Developer</p>
                        </div>

                    </div>

                    <div className="d-flex flex-column gap-3 text-start flex1 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                             className="bi bi-award mb-2" viewBox="0 0 16 16">
                            <path
                                d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                        </svg>
                        <h4>My Skills</h4>
                        <hr/>
                        <div className="d-flex flex-column gap-3 pb-4">
                            {skills.map((x, i) =>
                                <div className="d-flex flex-column">
                                    <div className="d-flex gap-2 justify-content-between"
                                         style={{width: `${x.percent}%`}}>
                                        <p className="bold">{x.name}</p>
                                        <p className="bold">{x.percent}%</p>
                                    </div>
                                    <div style={{width: `${x.percent}%`}}
                                         className="progressBar p-1 rounded bg-dark"></div>

                                </div>
                            )}

                        </div>


                    </div>

                </div>
            </div>
            <div id={`service`} className="what-i-do d-flex p-5 flex-column container pb-5 ">
                <h1 className="bold-text mt-5">What I do.</h1>
                <p className="text-muted m-3">Explore the range of services I offer, designed to elevate your digital presence. Let’s collaborate to create engaging and impactful solutions that resonate with your audience and achieve your goals.</p>
                <div className="d-flex flex-wrap gap-4 mt-5">
                    {jobs.map((x, i) =>
                        <SkillComp skill={x} key={i}/>)}
                </div>
            </div>
            <div id={`projects`} className="projects flex lg:flex-row flex-col mt-5 gap-5 lg:me-5">
                <div className="flex1">
                    {currentProject &&
                        <img
                            className={`cover-image w-100 h-[500px]`}
                            src={currentProject?.coverImage}
                            alt={currentProject?.title}
                        />
                    }
                </div>
                <div className="flex1 d-flex flex-column align-items-start  p-3">
                    <h1>Projects</h1>
                    <div className="line"></div>
                    <div className="d-flex flex-column gap-3 w-100 pt-3">
                        {projects.map((x, i) =>
                            <div
                                className="d-flex flex-column w-100"
                                key={i}
                                onMouseEnter={() => handleMouseEnter(i)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => nav(`/${x.link}`)}
                            >
                                <div className="d-flex justify-content-between cursor">
                                    <div className="d-flex">
                                        {activeIndex === i && (
                                            <div
                                                dangerouslySetInnerHTML={{__html: svgArrow}}
                                                className="me-2"
                                            />
                                        )}
                                        <div className="pb-3">{x.name}</div>
                                    </div>

                                    <div className="pb-3">{x.task}</div>
                                </div>
                                <div className="line-thin"></div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
            <div className="bg-gray mt-5">
                <div id={`contact`} className="contacts d-flex flex-column justify-content-center what-i-do container ">
                    <h1 className="bold-text mt-5 text-start">Contact Info</h1>
                    <div className="d-flex flex-column text-start gap-3 mb-5 ">
                        <div className="d-flex lg:flex-row flex-col w-100 lg:gap-5 gap-4 my-5 ">
                            <div className="d-flex flex-column gap-3 flex1">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55"
                                             fill="currentColor"
                                             className="bi bi-headphones bi-link" viewBox="0 0 16 16">
                                            <path
                                                d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5"/>
                                        </svg>
                                    </div>
                                    <div className="d-flex flex-column ">
                                        <h5 className="">Call Me</h5>
                                        <p className="m-0 text-muted">+37064562756</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55"
                                             fill="currentColor"
                                             className="bi bi-envelope bi-link" viewBox="0 0 16 16">
                                            <path
                                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                        </svg>
                                    </div>
                                    <div className="d-flex flex-column ">
                                        <h5 className="">Email Me</h5>
                                        <p className="m-0 text-muted">em.makaraviciute@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-3 flex2">
                                <div className="d-flex gap-3 align-items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55"
                                             fill="currentColor"
                                             className="bi bi-github bi-link" viewBox="0 0 16 16">
                                            <path
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                        </svg>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <h5>My Github</h5>
                                        <a href="https://github.com/emilijamak" target="_blank"
                                           rel="noopener noreferrer"
                                           className="text-muted link">
                                            https://github.com/emilijamak
                                        </a>
                                    </div>
                                </div>

                                <div className="d-flex gap-3 align-items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55"
                                             fill="currentColor"
                                             className="bi bi-linkedin bi-link" viewBox="0 0 16 16">
                                            <path
                                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                        </svg>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <h5>LinkedIn</h5>
                                        <a href="https://www.linkedin.com/in/emilijamak/" target="_blank"
                                           rel="noopener noreferrer" className="text-muted link">
                                            https://www.linkedin.com/in/emilijamak/
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

            <footer className={`w-100 p-3`}>
                <div className="d-flex gap-3 p-3 w-100 justify-content-center align-items-center h-100">
                    <a href="https://github.com/emilijamak" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
                             className="bi bi-github" viewBox="0 0 16 16">
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/emilijamak/" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
                             className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                    </a>

                </div>
            </footer>
        </div>
    );
}

export default App;
