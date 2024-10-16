import React from "react";

const Body = () => {
    return (

        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://img.freepik.com/free-vector/businessman-consulting-watch_74855-2350.jpg)"
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-base-100 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">Description</h1>
                        <p className="mb-5 text-2xl text-white">
                            The Result Management System is a
                            sophisticated web application designed to
                            streamline the management and display of
                            student results in an educational institution.  
                        </p>
                        <btn className="btn btn-primary">Sign up</btn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body