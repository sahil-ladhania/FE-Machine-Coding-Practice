import { useHireFlow } from "../hooks/useHireFlow"

export default function Step_2_Form_Component() {
    // useHireFlow Hook
    const {state , dispatch} = useHireFlow();

    // Extracting Data
    const { currentRole, department, employmentType, expectedSalary, joiningDate, resume } = state.formData;
    const errors = state.errors;

    // Handlers
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: "UPDATE_FIELD", payload: { name: e.target.name, value: e.target.value } });
        dispatch({ type: "CLEAR_FIELD_ERROR", payload: { field: e.target.name } });
    }

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        dispatch({ type: "UPDATE_FIELD", payload: { name: e.target.name, value: e.target.value } });
        dispatch({ type: "CLEAR_FIELD_ERROR", payload: { field: e.target.name } });
    }

    function handleResumeChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] ?? null;
        dispatch({ type: "UPDATE_FILE", payload: { name: "resume", value: file } });
        dispatch({ type: "CLEAR_FIELD_ERROR", payload: { field: "resume" } });
    }

    return (
        <div className="flex justify-center my-10">
            <form className="flex flex-col p-10 bg-slate-300 rounded w-full">
                <h2 className="text-2xl font-bold mb-6 text-slate-700">Professional Info</h2>
                <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="currentRole">Current Role</label>
                    <input onChange={handleInputChange} value={currentRole} className="border p-2 rounded" type="text" name="currentRole" placeholder="Enter Current Role" />
                    {errors.currentRole && <span className="text-red-500 text-sm">{errors.currentRole}</span>}
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="department">Department</label>
                    <select onChange={handleSelectChange} value={department} className="border p-2 rounded bg-white" name="department">
                        <option value="">Select Department</option>
                        <option value="engineering">Engineering</option>
                        <option value="design">Design</option>
                        <option value="marketing">Marketing</option>
                        <option value="hr">HR</option>
                        <option value="sales">Sales</option>
                    </select>
                    {errors.department && <span className="text-red-500 text-sm">{errors.department}</span>}
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <label>Employment Type</label>
                    <div className="flex gap-4">
                        <label><input onChange={handleInputChange} checked={employmentType === "full-time"} type="radio" name="employmentType" value="full-time" /> Full-Time</label>
                        <label><input onChange={handleInputChange} checked={employmentType === "part-time"} type="radio" name="employmentType" value="part-time" /> Part-Time</label>
                        <label><input onChange={handleInputChange} checked={employmentType === "contract"} type="radio" name="employmentType" value="contract" /> Contract</label>
                    </div>
                    {errors.employmentType && <span className="text-red-500 text-sm">{errors.employmentType}</span>}
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="expectedSalary">Expected Salary</label>
                    <input onChange={handleInputChange} value={expectedSalary} className="border p-2 rounded" type="number" name="expectedSalary" placeholder="Enter Expected Salary" />
                    {errors.expectedSalary && <span className="text-red-500 text-sm">{errors.expectedSalary}</span>}
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="joiningDate">Available to Join</label>
                    <input onChange={handleInputChange} value={joiningDate} className="border p-2 rounded" type="date" name="joiningDate" />
                    {errors.joiningDate && <span className="text-red-500 text-sm">{errors.joiningDate}</span>}
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="resume">Resume / CV</label>
                    <input onChange={handleResumeChange} className="p-2 rounded bg-teal-200" type="file" name="resume" accept=".pdf" />
                    {resume && <span className="text-sm text-slate-600">{resume.name}</span>}
                    {errors.resume && <span className="text-red-500 text-sm">{errors.resume}</span>}
                </div>
            </form>
        </div>
    )
};
