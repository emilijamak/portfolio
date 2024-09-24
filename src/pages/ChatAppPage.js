import React, {useEffect} from 'react';
import chatAppCover from '../images/chat1.png'
import chatAppImg1 from '../images/chat2.png'
import chatAppImg2 from '../images/chat3.png'
import chatAppImg3 from '../images/chat4.png'
import chatAppImg4 from '../images/chat5.png'
import chatAppImg5 from '../images/chat6.png'



const ShipAppPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when the component mounts
    }, []);

    return (
        <div>
            <div className={`flex flex-column container`}>
                <img className={`rounded-bottom-5 w-100`} src={chatAppCover} alt=""/>
                <h1 className="big-text mt-5 text-start">Chat App</h1>
                <div className="line-thin my-3"></div>
                <div className="d-flex gap-3 w-100 lg:flex-row flex-col">
                    <div className="d-flex flex-column flex1 gap-4">
                        <div style={{color: '#202633'}} className="d-flex gap-3 align-items-center">
                            <div className="d-flex h-100 flex1">
                                <h4 className={`d-flex text-start`} style={{margin: 0}}>MY CONTRIBUTION : </h4>
                            </div>
                            <div className="d-flex flex-column flex2 text-start">
                                <p style={{fontSize: '20px'}} className={`m-0`}>Front-End development</p>
                                <p style={{fontSize: '20px'}} className={`m-0`}>Back-End development</p>
                                <p style={{fontSize: '20px'}} className={`m-0`}>Design UI/UX</p>
                            </div>
                        </div>
                        <div style={{color: '#202633'}} className="d-flex gap-3 align-items-center w-100 ">
                            <div className="d-flex h-100 flex1">
                                <h4 className={`d-flex`} style={{margin: 0}}>YEAR: </h4>
                            </div>
                            <div className="d-flex flex-column flex2 text-start">
                                <p style={{fontSize: '20px'}} className={`m-0`}>2024</p>
                            </div>
                        </div>
                        <div className="d-flex"></div>
                    </div>
                    <div className="d-flex flex1 text-start">
                        <p className="description">As part of my final task at Code Academy, I developed a chat website
                            that allows users to register, engage in one-on-one conversations, create group chats, and
                            join public chat rooms. The project was built using React, Node.js, and Socket.io to enable
                            real-time communication. Tailwind CSS was used for responsive and modern styling, and
                            MongoDB served as the database to store user data, ensuring a seamless and interactive user
                            experience.</p>
                    </div>
                </div>
                <div className="d-flex flex-column mt-5 align-items-center mb-5">
                    <h4 className="">PHOTOS</h4>
                    <img height={600} width={1300} className={`shadow rounded`} src={chatAppImg1} alt=""/>
                    <img height={600} width={1300} className={`shadow rounded mt-5`} src={chatAppImg2} alt=""/>
                    <img height={600} width={1300} className={`shadow rounded mt-5`} src={chatAppImg3} alt=""/>
                    <img height={600} width={1300} className={`shadow rounded mt-5`} src={chatAppImg4} alt=""/>
                    <img height={600} width={1300} className={`shadow rounded mt-5`} src={chatAppImg5} alt=""/>
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
};

export default ShipAppPage;