import type { FormData, FormErrors } from "../types/hireFlowTypes";

// Step 1 Validator
export function validateStep1(formData: FormData): FormErrors {
    const errors: FormErrors = {};

    const fullName = formData.fullName;
    const age = formData.age;
    const gender = formData.gender;
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;
    const profilePhoto = formData.profilePhoto;

    if((fullName === "") || (fullName.trim().length < 3)){
        errors.fullName = "Full name must be at least 3 characters";
    };

    if((age === "") || (parseInt(age) < 18 || parseInt(age) > 60)){
        errors.age = "Age must be between 18 and 60";
    };

    if(gender === ""){
        errors.gender = "Gender cannot be Empty";
    };

    if(password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)){
        errors.password = "Password must be at least 8 characters, include one uppercase letter and one number";
    };

    if(password !== confirmPassword){
        errors.confirmPassword = "Password and Confirm Password should be same";
    };

    if(!profilePhoto || (profilePhoto.type !== 'image/jpeg' && profilePhoto.type !== 'image/png') || profilePhoto.size > (2 * 1024 * 1024)){
        errors.profilePhoto = "Profile Photo should be either in jpeg or png and should be less than 2MB";
    };

    return errors;
};

// Step 2 Validator
export function validateStep2(formData: FormData): FormErrors {
    const errors: FormErrors = {};

    const currentRole = formData.currentRole;
    const department = formData.department;
    const employmentType = formData.employmentType;
    const expectedSalary = formData.expectedSalary;
    const joiningDate = formData.joiningDate;
    const resume = formData.resume;

    if(currentRole === ""){
        errors.currentRole = "Current Role cannot be empty";
    };

    if(department === ""){
        errors.department = "Department cannot be empty";
    };

    if(employmentType === ""){
        errors.employmentType = "Employment Type cannot be empty";
    };

    if(expectedSalary === "" || parseInt(expectedSalary) < 100000){
        errors.expectedSalary = "Expected Salary cannot be empty and must be more than equal to 100000";
    };

    if(joiningDate === "" || new Date(joiningDate) <= new Date()){
        errors.joiningDate = "Joining Date cannot be empty and should be in future";
    };

    if(!resume || resume.type !== 'application/pdf' || resume.size > (5 * 1024 * 1024)){
        errors.resume = "Resume should be in pdf format and should be less than 5 MB";
    };

    return errors;
};

// Step 3 Validator
export function validateStep3(formData: FormData): FormErrors {
    const errors: FormErrors = {};

    const skillErrors: FormErrors["skills"] = formData.skills.map(() => ({}));

    const allNames = formData.skills.map((s) => s.name.toLowerCase());

    formData.skills.forEach((skill, index) => {
        if(skill.name === ""){
            skillErrors[index].name = "Skill name is required";
        } 
        else if(allNames.indexOf(skill.name.toLowerCase()) !== index){
            skillErrors[index].name = "Duplicate skill name";
        };

        if(skill.proficiency === ""){
            skillErrors[index].proficiency = "Proficiency is required";
        };

        if(skill.experience === "" || parseInt(skill.experience) < 0 || parseInt(skill.experience) > 30){
            skillErrors[index].experience = "Experience is required and must be between 0 and 30";
        };
    });

    errors.skills = skillErrors;

    return errors;
};

// Step 4 Validator
export function validateStep4(formData: FormData): FormErrors {
    const errors: FormErrors = {};

    if(formData.workModes.length < 1){
        errors.workModes = "1 Work Mode must be selected atleast";
    };

    if(formData.locations.length < 1){
        errors.locations = "1 Location must be selected atleast";
    };

    if((formData.coverLetter === "") || ((formData.coverLetter.trim().length < 100) || (formData.coverLetter.trim().length > 500))){
        errors.coverLetter = "Cover Letter must be filled and should be between 100 to 500 characters";
    };

    if(formData.agreeToTerms === false){
        errors.agreeToTerms = "Agree To Terms must be true";
    };

    return errors;
};