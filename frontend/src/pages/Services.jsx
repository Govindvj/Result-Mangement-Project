import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Our Services</h1>
                    <p className="py-6">
                        We provide service for the management of students result. <br/>
                        Some time in most cases it becomes difficult to manage the results of the students.<br/>
                        Here is why we have came up with the idea of Result Management System. 
                    </p>
                    <a className="btn btn-primary"> <Link to=''>Add Student</Link>/<Link to=''>Contact Us</Link> </a>
                </div>
            </div>
        </div>
    )
}

export default Services