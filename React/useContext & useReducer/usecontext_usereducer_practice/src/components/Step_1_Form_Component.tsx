import { useHireFlow } from "../hooks/useHireFlow"

export default function Step_1_Form_Component() {
    // useHireFlow Hook
    const { state, dispatch } = useHireFlow();

    // Extracting Values
    const { fullName, age, gender, password, confirmPassword, profilePhoto } = state.formData;
    const errors = state.errors;

    // Handler Functions
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: "UPDATE_FIELD", payload: { name: e.target.name, value: e.target.value } });
        dispatch({ type: "CLEAR_FIELD_ERROR", payload: { field: e.target.name } });
    };

    function handleProfilePhoto(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] ?? null;
        dispatch({ type: "UPDATE_FILE", payload: { name: "profilePhoto", value: file } });
        dispatch({ type: "CLEAR_FIELD_ERROR", payload: { field: "profilePhoto" } });
    };

    return (
        <div className="flex justify-center my-10">
            <form className="flex flex-col p-10 bg-slate-300 rounded w-full">
                <h2 className="text-2xl font-bold mb-6 text-slate-700">Personal Info</h2>
                <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="fullName">Full Name</label>
                    <input onChange={handleInputChange} value={fullName} className="border p-2 rounded" type="text" name="fullName" placeholder="Enter Full Name"/>
                    {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="age">Age</label>
                    <input onChange={handleInputChange} value={age} className="border p-2 rounded" type="number" name="age" placeholder="Enter Age"/>
                    {errors.age && <span className="text-red-500 text-sm">{errors.age}</span>}
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <label>Gender</label>
                    <div className="flex gap-4">
                        <label><input onChange={handleInputChange} checked={gender === "male"} type="radio" name="gender" value="male" /> Male</label>
                        <label><input onChange={handleInputChange} checked={gender === "female"} type="radio" name="gender" value="female" /> Female</label>
                        <label><input onChange={handleInputChange} checked={gender === "other"} type="radio" name="gender" value="other" /> Other</label>
                    </div>
                    {errors.gender && <span className="text-red-500 text-sm">{errors.gender}</span>}
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="password">Password</label>
                    <input onChange={handleInputChange} value={password} className="border p-2 rounded" type="password" name="password" placeholder="Enter Password"/>
                    {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input onChange={handleInputChange} value={confirmPassword} className="border p-2 rounded" type="password" name="confirmPassword" placeholder="Re-enter Password"/>
                    {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="profilePhoto">Profile Photo</label>
                    <input onChange={handleProfilePhoto} className="p-2 rounded bg-teal-200" type="file" name="profilePhoto" accept="image/jpeg, image/png"/>
                    {profilePhoto && <span className="text-sm text-slate-600">{profilePhoto.name}</span>}
                    {errors.profilePhoto && <span className="text-red-500 text-sm">{errors.profilePhoto}</span>}
                </div>
            </form>
        </div>
    )
};