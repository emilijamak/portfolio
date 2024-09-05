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
        <div className={`flex flex-column container`}>
            <img className={`rounded-bottom-5 w-100`} src={chatAppCover} alt=""/>
            <h1 className="big-text mt-5 text-start">Chat App</h1>
            <div className="line-thin my-3"></div>
            <div className="d-flex gap-3 w-100">
                <div className="d-flex flex-column flex1 gap-4">
                    <div style={{color: '#202633'}} className="d-flex gap-3 align-items-center">
                        <div className="d-flex h-100 flex1">
                            <h4 className={`d-flex text-start`} style={{margin: 0}}>MY CONTRIBUTION : </h4>
                        </div>
                        <div className="d-flex flex-column flex2 text-start">
                            <p style={{fontSize: '20px'}} className={`m-0`}>Design UI/UX</p>
                            <p style={{fontSize: '20px'}} className={`m-0`}>Design UI/UX</p>
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
                    <p className="description">As part of my final task at Code Academy, I developed a chat website that allows users to register, engage in one-on-one conversations, create group chats, and join public chat rooms. The project was built using React, Node.js, and Socket.io to enable real-time communication. Tailwind CSS was used for responsive and modern styling, and MongoDB served as the database to store user data, ensuring a seamless and interactive user experience.</p>
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
    );
};

export default ShipAppPage;