
// Skill Interface
export interface Skill {
    id: string;
    name: string;
    proficiency: string;
    experience: string;
};

// Form Data Interface
export interface FormData {
    fullName: string;
    age: string;
    gender: string;
    password: string;
    confirmPassword: string;
    profilePhoto: File | null;

    currentRole: string;
    department: string;
    employmentType: string;
    expectedSalary: string;
    joiningDate: string;
    resume: File | null;

    skills: Skill[];

    workModes: string[];
    locations: string[];
    willingToRelocate: boolean;
    coverLetter: string;
    agreeToTerms: boolean;
    newsletter: boolean;
};

// Skill Error Interface
export interface SkillError {
    name?: string;
    proficiency?: string;
    experience?: string;
};

// FormErrors Interface
export interface FormErrors {
    fullName?: string;
    age?: string;
    gender?: string;
    password?: string;
    confirmPassword?: string;
    profilePhoto?: string;

    currentRole?: string;
    department?: string;
    employmentType?: string;
    expectedSalary?: string;
    joiningDate?: string;
    resume?: string;

    skills?: SkillError[];

    workModes?: string;
    locations?: string;
    coverLetter?: string;
    agreeToTerms?: string;
};

// HireFlow Reducer Interface
export interface HireFlowState {
    currentStep: number;
    formData: FormData;
    errors: FormErrors;
};

// HireFlow Reducers Action Types
export type HireFlowAction =
    | { type: "UPDATE_FIELD"; payload: { name: string; value: string } }
    | { type: "UPDATE_FILE"; payload: { name: string; value: File | null } }
    | { type: "UPDATE_CHECKBOX"; payload: { name: string } }
    | { type: "UPDATE_CHECKBOX_ARRAY"; payload: { name: string; value: string } }
    | { type: "ADD_SKILL" }
    | { type: "REMOVE_SKILL"; payload: { id: string } }
    | { type: "UPDATE_SKILL"; payload: { id: string; field: string; value: string } }
    | { type: "SET_STEP"; payload: { step: number } }
    | { type: "SET_ERRORS"; payload: { errors: FormErrors } }
    | { type: "CLEAR_FIELD_ERROR"; payload: { field: string } }
    | { type: "CLEAR_SKILL_ERROR"; payload: { index: number; field: string } }
    | { type: "RESET" };

// HireFlow Context Type
export interface HireFlowContextType {
    state: HireFlowState;
    dispatch: React.Dispatch<HireFlowAction>;
};