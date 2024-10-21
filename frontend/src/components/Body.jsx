import React from "react";

const Body = () => {
    return (

        <div>
            <div className="hero body bg-zinc-950 bg-gradient-to-tl from-purple-700 min-h-screen relative">
                <div className="bg-white md:bg-gray-900"></div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://img.freepik.com/free-vector/preparing-test-together-learning-studying-with-friends-effective-revision-revision-timetables-planning-how-revise-exams-concept_335657-825.jpg"
                        className="max-w-sm rounded-lg shadow- shadow-[0_0px_30px_rgba(0,_0,_0,_0.7)]" />
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-base-100 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">Description</h1>
                        <p className="py-6 mb-5 text-xl text-white">
                            The Result Management System is a
                            sophisticated web application designed to
                            streamline the management and display of
                            student results in an educational institution.
                        </p>
                        <button className="btn btn-primary hover:shadow-[0_0px_30px_rgba(107,_33,_168,_0.7)]">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body