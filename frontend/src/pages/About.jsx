import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">About Us</h1>
                    <p className="py-6">
                        Our team provide the best experience in managing the result of a student. <br/>
                        Which help students as well as teacher to keep record in clean and a easy manner.<br/>
                        For any query you can contact Us at contactus@rms.com or simply click the button below and mail us by filling up the details.
                    </p>
                    <Link to='/Contact'><button className="btn btn-primary">Contact Us</button></Link>
                </div>
            </div>
        </div>
    )
}

export default About