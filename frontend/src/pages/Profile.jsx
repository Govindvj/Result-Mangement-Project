import React from 'react'

const Profile = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/social-media-profile-illustration-download-in-svg-png-gif-file-formats--adding-picture-display-setting-add-post-pack-people-illustrations-4608473.png?f=webp"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Create Profile</h1>
                    <p className="py-6">
                        Create profile of the student to easily manage the results.
                    </p>
                    <button className="btn btn-primary hover:shadow-[0_0px_30px_rgba(107,_33,_168,_0.7)]">Add Student</button>
                </div>
            </div>
        </div>
    )
}

export default Profile