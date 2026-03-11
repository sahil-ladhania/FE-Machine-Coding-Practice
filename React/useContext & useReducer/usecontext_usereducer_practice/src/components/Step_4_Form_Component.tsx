import { useHireFlow } from "../hooks/useHireFlow";

export default function Step_4_Form_Component() {
    // useHireFlow Hook
    const { state, dispatch } = useHireFlow();

    // Extracting Data
    const { workModes, locations, willingToRelocate, coverLetter, agreeToTerms, newsletter } = state.formData;
    const errors = state.errors;

    return (
        <div className="flex justify-center my-10">
            <form className="flex flex-col p-10 bg-slate-300 rounded w-full">
                <h2 className="text-2xl font-bold mb-6 text-slate-700">Preferences & Agreements</h2>

                <div className="flex flex-col gap-2 my-2">
                    <label>Preferred Work Mode</label>
                    <div className="flex gap-4">
                        {["remote", "hybrid", "on-site"].map((mode) => (
                            <label key={mode}>
                                <input
                                    type="checkbox"
                                    name="workModes"
                                    value={mode}
                                    checked={workModes.includes(mode)}
                                    onChange={() => dispatch({ type: "UPDATE_CHECKBOX_ARRAY", payload: { name: "workModes", value: mode } })}
                                /> {mode.charAt(0).toUpperCase() + mode.slice(1)}
                            </label>
                        ))}
                    </div>
                    {errors.workModes && <span className="text-red-500 text-sm">{errors.workModes}</span>}
                </div>

                <div className="flex flex-col gap-2 my-2">
                    <label>Preferred Locations <span className="text-sm text-gray-600">(Max 3)</span></label>
                    <div className="flex flex-wrap gap-4">
                        {["delhi", "mumbai", "bangalore", "pune", "hyderabad"].map((city) => (
                            <label key={city}>
                                <input
                                    type="checkbox"
                                    name="locations"
                                    value={city}
                                    checked={locations.includes(city)}
                                    disabled={locations.length >= 3 && !locations.includes(city)}
                                    onChange={() => dispatch({ type: "UPDATE_CHECKBOX_ARRAY", payload: { name: "locations", value: city } })}
                                /> {city.charAt(0).toUpperCase() + city.slice(1)}
                            </label>
                        ))}
                    </div>
                    {errors.locations && <span className="text-red-500 text-sm">{errors.locations}</span>}
                </div>

                <div className="flex flex-col gap-2 my-2">
                    <label>
                        <input
                            type="checkbox"
                            name="willingToRelocate"
                            className="mr-2"
                            checked={willingToRelocate}
                            onChange={() => dispatch({ type: "UPDATE_CHECKBOX", payload: { name: "willingToRelocate" } })}
                        />
                        Willing to Relocate
                    </label>
                </div>

                <div className="flex flex-col gap-2 my-2">
                    <label htmlFor="coverLetter">Cover Letter</label>
                    <textarea
                        className="border p-2 rounded resize-none"
                        name="coverLetter"
                        rows={5}
                        placeholder="Write your cover letter here..."
                        maxLength={500}
                        value={coverLetter}
                        onChange={(e) => {
                            dispatch({ type: "UPDATE_FIELD", payload: { name: "coverLetter", value: e.target.value } });
                            dispatch({ type: "CLEAR_FIELD_ERROR", payload: { field: "coverLetter" } });
                        }}
                    />
                    <span className={`text-sm self-end ${coverLetter.length < 100 ? "text-red-500" : "text-green-600"}`}>
                        {coverLetter.length} / 500
                    </span>
                    {errors.coverLetter && <span className="text-red-500 text-sm">{errors.coverLetter}</span>}
                </div>

                <div className="flex flex-col gap-2 my-2">
                    <label>
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            className="mr-2"
                            checked={agreeToTerms}
                            onChange={() => dispatch({ type: "UPDATE_CHECKBOX", payload: { name: "agreeToTerms" } })}
                        />
                        I agree to the Terms & Conditions
                    </label>
                    {errors.agreeToTerms && <span className="text-red-500 text-sm">{errors.agreeToTerms}</span>}
                </div>

                <div className="flex flex-col gap-2 my-2">
                    <label>
                        <input
                            type="checkbox"
                            name="newsletter"
                            className="mr-2"
                            checked={newsletter}
                            onChange={() => dispatch({ type: "UPDATE_CHECKBOX", payload: { name: "newsletter" } })}
                        />
                        Subscribe to Newsletter (Optional)
                    </label>
                </div>
            </form>
        </div>
    )
};
