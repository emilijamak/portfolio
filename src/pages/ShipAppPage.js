import React, {useEffect} from 'react';
import shipAppCover from '../images/Screenshot 2024-08-14 084638.png'
import shipAppImg1 from '../images/Screenshot 2024-08-14 084733.png'
import shipAppImg2 from '../images/Screenshot 2024-08-14 084812.png'
import shipAppImg3 from '../images/Screenshot 2024-08-14 085147.png'
import shipAppImg4 from '../images/ship4.png'
import shipAppImg5 from '../images/ship5.png'


const ShipAppPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when the component mounts
    }, []);

    return (
        <div className={`flex flex-column container`}>
            <img className={`rounded-bottom-5 w-100`} src={shipAppCover} alt=""/>
            <h1 className="big-text mt-5 text-start">SIUNTIVEZI.LT</h1>
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
                    <p className="description">As part of a team of 11 Code Academy students, I contributed to the development of siunti-vezi.lt, a web application built using React and Next.js. The platform connects users with independent couriers, enabling them to ship parcels more affordably and efficiently than traditional services like LP Express or DPD. Users can propose their own pricing, track shipment progress, and even sign up as couriers to earn money by delivering shipments. My role in the project involved working on both the frontend and backend development, as well as contributing to the design of the application.</p>
                </div>
            </div>
            <div className="d-flex flex-column mt-5 align-items-center mb-5">
                <h4 className="">PHOTOS</h4>
                <img height={530} width={1300} className={`shadow rounded`} src={shipAppImg4} alt=""/>
                <img height={530} width={1300} className={`shadow rounded mt-5`} src={shipAppImg2} alt=""/>
                <img height={530} width={1300} className={`shadow rounded mt-5`} src={shipAppImg1} alt=""/>
                <img height={530} width={1300} className={`shadow rounded mt-5`} src={shipAppImg3} alt=""/>
                <img height={530} width={1300} className={`shadow rounded mt-5`} src={shipAppImg5} alt=""/>
            </div>
        </div>
    );
};

export default ShipAppPage;