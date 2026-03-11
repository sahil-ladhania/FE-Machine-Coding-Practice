
export default function ReviewCardComponent() {
    return (
        <div className="flex justify-center my-10">
            <div className="flex flex-col gap-6 p-8 bg-slate-100 rounded-xl w-full max-w-2xl shadow-sm">
                <h2 className="text-2xl font-bold text-slate-700">Review Your Application</h2>

                {/* Personal Info */}
                <div className="bg-white rounded-lg p-5 border border-slate-200">
                    <h3 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-4">Personal Info</h3>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                        <div>
                            <p className="text-xs text-slate-400">Full Name</p>
                            <p className="text-sm font-medium text-slate-700">Sahil Ladhania</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Age</p>
                            <p className="text-sm font-medium text-slate-700">24</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Gender</p>
                            <p className="text-sm font-medium text-slate-700">Male</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Profile Photo</p>
                            <p className="text-sm font-medium text-slate-700">photo.jpg</p>
                        </div>
                    </div>
                </div>

                {/* Professional Info */}
                <div className="bg-white rounded-lg p-5 border border-slate-200">
                    <h3 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-4">Professional Info</h3>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                        <div>
                            <p className="text-xs text-slate-400">Current Role</p>
                            <p className="text-sm font-medium text-slate-700">Frontend Developer</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Department</p>
                            <p className="text-sm font-medium text-slate-700">Engineering</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Employment Type</p>
                            <p className="text-sm font-medium text-slate-700">Full-Time</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Expected Salary</p>
                            <p className="text-sm font-medium text-slate-700">₹12,00,000</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Available to Join</p>
                            <p className="text-sm font-medium text-slate-700">2026-04-01</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Resume</p>
                            <p className="text-sm font-medium text-slate-700">resume.pdf</p>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="bg-white rounded-lg p-5 border border-slate-200">
                    <h3 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-4">Skills</h3>
                    <div className="flex flex-col gap-2">
                        <div className="grid grid-cols-3 text-xs font-semibold text-slate-400 mb-1">
                            <span>Skill Name</span>
                            <span>Proficiency</span>
                            <span>Years of Experience</span>
                        </div>
                        <div className="grid grid-cols-3 text-sm text-slate-700">
                            <span>React</span>
                            <span>Expert</span>
                            <span>3 yrs</span>
                        </div>
                        <div className="grid grid-cols-3 text-sm text-slate-700">
                            <span>TypeScript</span>
                            <span>Intermediate</span>
                            <span>2 yrs</span>
                        </div>
                    </div>
                </div>

                {/* Preferences */}
                <div className="bg-white rounded-lg p-5 border border-slate-200">
                    <h3 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-4">Preferences & Agreements</h3>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                        <div>
                            <p className="text-xs text-slate-400">Preferred Work Mode</p>
                            <p className="text-sm font-medium text-slate-700">Remote, Hybrid</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Preferred Locations</p>
                            <p className="text-sm font-medium text-slate-700">Bangalore, Pune</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Willing to Relocate</p>
                            <p className="text-sm font-medium text-slate-700">Yes</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Newsletter</p>
                            <p className="text-sm font-medium text-slate-700">Subscribed</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-xs text-slate-400 mb-1">Cover Letter</p>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            I am passionate about building great user experiences and would love to bring my frontend skills to your team. I have worked extensively with React and TypeScript and am eager to contribute.
                        </p>
                    </div>
                </div>

                {/* Terms + Submit */}
                <div className="flex flex-col items-center gap-3">
                    <p className="text-xs text-slate-400 text-center">
                        By submitting, you agree to the <span className="text-blue-700 font-medium">Terms & Conditions</span>.
                    </p>
                    <button type="submit" className="bg-blue-700 text-white font-semibold px-10 py-2.5 rounded-lg hover:bg-blue-800">
                        Submit Application
                    </button>
                </div>
            </div>
        </div>
    );
}
