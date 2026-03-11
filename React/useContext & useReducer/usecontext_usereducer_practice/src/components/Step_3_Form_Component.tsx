import { MdDelete } from 'react-icons/md';
import { useHireFlow } from '../hooks/useHireFlow';

export default function Step_3_Form_Component() {
    // useHireFlow Hook
    const { state, dispatch } = useHireFlow();

    // Extracting Data
    const { skills } = state.formData;
    const errors = state.errors;

    // Handler Functions
    function handleSkillChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, id: string, index: number) {
        dispatch({ type: "UPDATE_SKILL", payload: { id, field: e.target.name, value: e.target.value } });
        dispatch({ type: "CLEAR_SKILL_ERROR", payload: { index, field: e.target.name } });
    };

    return (
        <div className="flex justify-center my-10">
            <form className="flex flex-col p-6 bg-slate-300 rounded w-full">
                <h2 className="text-2xl font-bold mb-6 text-slate-700">Skills</h2>

                {/* Column Headers */}
                <div className="flex gap-3 mb-1">
                    <span className="flex-1 text-sm font-semibold text-slate-600">Skill Name</span>
                    <span className="flex-1 text-sm font-semibold text-slate-600">Proficiency</span>
                    <span className="flex-1 text-sm font-semibold text-slate-600">Years of Experience</span>
                    <span className="w-16"></span>
                </div>

                <div className="flex flex-col gap-3">
                    {skills.map((skill, index) => (
                        <div key={skill.id}>
                            <div className="flex gap-3 items-center">
                                <input
                                    className="border p-2 rounded flex-1 min-w-0"
                                    type="text"
                                    name="name"
                                    value={skill.name}
                                    placeholder="Enter Skill Name"
                                    onChange={(e) => handleSkillChange(e, skill.id, index)}
                                />
                                <select
                                    className="border p-2 rounded bg-white flex-1 min-w-0"
                                    name="proficiency"
                                    value={skill.proficiency}
                                    onChange={(e) => handleSkillChange(e, skill.id, index)}
                                >
                                    <option value="">Select</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="expert">Expert</option>
                                </select>
                                <input
                                    className="border p-2 rounded flex-1 min-w-0"
                                    type="number"
                                    name="experience"
                                    value={skill.experience}
                                    placeholder="Years"
                                    onChange={(e) => handleSkillChange(e, skill.id, index)}
                                />
                                <button
                                    type="button"
                                    title="Remove skill"
                                    className={`shrink-0 text-red-400 ${skills.length <= 2 ? "opacity-50 cursor-not-allowed" : ""}`}
                                    disabled={skills.length <= 2}
                                    onClick={() => dispatch({ type: "REMOVE_SKILL", payload: { id: skill.id } })}
                                >
                                    <MdDelete size={22} />
                                </button>
                            </div>
                            {/* Skill Row Errors */}
                            <div className="flex gap-3 mt-1">
                                <div className="flex-1 min-w-0">
                                    {errors.skills?.[index]?.name && <span className="text-red-500 text-xs">{errors.skills[index].name}</span>}
                                </div>
                                <div className="flex-1 min-w-0">
                                    {errors.skills?.[index]?.proficiency && <span className="text-red-500 text-xs">{errors.skills[index].proficiency}</span>}
                                </div>
                                <div className="flex-1 min-w-0">
                                    {errors.skills?.[index]?.experience && <span className="text-red-500 text-xs">{errors.skills[index].experience}</span>}
                                </div>
                                <span className="w-16"></span>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className={`mt-6 bg-teal-500 text-white px-4 py-2 rounded w-fit ${skills.length >= 6 ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={skills.length >= 6}
                    onClick={() => dispatch({ type: "ADD_SKILL" })}
                >
                    + Add Skill
                </button>
            </form>
        </div>
    )
};