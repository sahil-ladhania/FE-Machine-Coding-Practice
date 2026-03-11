
import type { HireFlowAction, HireFlowState } from "../types/hireFlowTypes";

export const initialState: HireFlowState = {
    currentStep: 1,
    formData: {
        fullName: "",
        age: "",
        gender: "",
        password: "",
        confirmPassword: "",
        profilePhoto: null,

        currentRole: "",
        department: "",
        employmentType: "",
        expectedSalary: "",
        joiningDate: "",
        resume: null,

        skills: [],

        workModes: [],
        locations: [],
        willingToRelocate: false,
        coverLetter: "",
        agreeToTerms: false,
        newsletter: false,
    },
    errors: {},
};

export function hireFlowReducer(state: HireFlowState, action: HireFlowAction): HireFlowState {
    switch (action.type) {
        case "UPDATE_FIELD":
            return state;

        case "UPDATE_FILE":
            return state;

        case "UPDATE_CHECKBOX":
            return state;

        case "UPDATE_CHECKBOX_ARRAY":
            return state;

        case "ADD_SKILL":
            return state;

        case "REMOVE_SKILL":
            return state;

        case "UPDATE_SKILL":
            return state;

        case "SET_STEP":
            return state;

        case "SET_ERRORS":
            return state;

        case "CLEAR_FIELD_ERROR":
            return state;

        case "CLEAR_SKILL_ERROR":
            return state;

        case "RESET":
            return state;

        default:
            return state;
    }
};