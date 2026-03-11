# 🧩 Problem Statement: HireFlow — Multi-Step Job Application Portal

---

## 📋 Description

Build a **4-Step Job Application Form** that mimics a real-world hiring portal. User can navigate **forward and backward** between steps. **State must persist** across all steps — going back should never clear previously filled data. Each step has its own validation — **only validate current step on Next**, not the entire form.

---

## 🗺️ Navigation Flow

```
[Step 1: Personal Info] → [Step 2: Professional Info] → [Step 3: Skills] → [Step 4: Preferences] → [Review Card]
```

- **Next button** → validates current step only → moves forward if valid
- **Back button** → no validation → just go back, state stays intact
- **Step indicator** at top (1 → 2 → 3 → 4) showing completed / active / pending
- Clicking a **completed step number** should allow jumping back to it directly
- Clicking a **future/pending step** should NOT be allowed directly

---

## 🏗️ Form Structure

### 🔵 Step 1 — Personal Info

| Field           | Type           | Validation                                    |
| --------------- | -------------- | --------------------------------------------- |
| Full Name       | Text           | Required, min 3 chars                         |
| Age             | Number         | Required, min 18, max 60                      |
| Gender          | Radio          | Required (Male / Female / Other)              |
| Password        | Password       | Required, min 8 chars, 1 uppercase, 1 number  |
| Confirm Password| Password       | Must match Password                           |
| Profile Photo   | File (image)   | Required, jpg/png only, max 2MB               |

**Special behaviours:**
- Password field has show/hide toggle
- Profile photo shows **live image preview** below the input after selection
- If user goes back to Step 1 and changes Profile Photo — preview must update

---

### 🔵 Step 2 — Professional Info

| Field             | Type         | Validation                                              |
| ----------------- | ------------ | ------------------------------------------------------- |
| Current Role      | Text         | Required                                                |
| Department        | Select       | Required (Engineering / Design / Marketing / HR / Sales)|
| Employment Type   | Radio        | Required (Full-Time / Part-Time / Contract)             |
| Expected Salary   | Number       | Required, min 100000                                    |
| Available to Join | Date         | Required, must be a future date                         |
| Resume / CV       | File (PDF)   | Required, max 5MB                                       |

**Special behaviours:**
- Resume input shows **filename** after selection (not a preview, just the name)
- Date picker must not allow past dates (use `min` attribute on date input)

---

### 🔵 Step 3 — Skills (Dynamic Rows)

| Field               | Type   | Validation                                      |
| ------------------- | ------ | ----------------------------------------------- |
| Skill Name          | Text   | Required                                        |
| Proficiency         | Select | Required (Beginner / Intermediate / Expert)     |
| Years of Experience | Number | Required, min 0, max 30                         |

**Constraints:**
- Min **2 rows**, Max **6 rows**
- **No duplicate skill names** (case-insensitive)
- Add Skill button **disabled** at 6 rows
- Remove button **disabled** at 2 rows
- When a row is removed → re-validate remaining rows immediately

---

### 🔵 Step 4 — Preferences & Agreements

| Field                | Type                  | Validation                                                       |
| -------------------- | --------------------- | ---------------------------------------------------------------- |
| Preferred Work Mode  | Checkbox Group        | At least 1 required (Remote / Hybrid / On-site)                  |
| Preferred Locations  | Checkbox Group        | Min 1, Max 3 (Delhi / Mumbai / Bangalore / Pune / Hyderabad)     |
| Willing to Relocate  | Checkbox (as Toggle)  | Optional                                                         |
| Cover Letter         | Textarea              | Required, min 100 chars, max 500 chars                           |
| Terms & Conditions   | Checkbox              | Must be checked to submit                                        |
| Newsletter Signup    | Checkbox              | Optional                                                         |

**Special behaviours:**
- Once 3 locations selected → **disable remaining unchecked** location checkboxes
- Cover Letter shows **live character counter** → `234 / 500`
- Counter turns **red** when below 100 chars, **green** when in valid range
- **Submit button** disabled unless `agreeToTerms === true`

---

## 📦 Complete State Shape

```js
const initialState = {
  // Step 1
  fullName: "",
  age: "",
  gender: "",
  password: "",
  confirmPassword: "",
  profilePhoto: null,         // File object

  // Step 2
  currentRole: "",
  department: "",
  employmentType: "",
  expectedSalary: "",
  joiningDate: "",
  resume: null,               // File object

  // Step 3
  skills: [
    { id: "uuid-1", name: "", proficiency: "", experience: "" },
    { id: "uuid-2", name: "", proficiency: "", experience: "" }   // start with 2 rows
  ],

  // Step 4
  workModes: [],              // array of strings
  locations: [],              // array of strings, max 3
  willingToRelocate: false,
  coverLetter: "",
  agreeToTerms: false,
  newsletter: false
}
```

> ⚠️ This **single state object lives in the parent** (App or a wrapper component). All steps receive values and onChange handlers via props. Steps do NOT have their own local state for form fields.

---

## 🧠 Validation Logic

- **Each step has its own `validate()` function** that returns an errors object
- Errors shape example:

```js
// Step 1 errors
{
  fullName: "Full name is required",
  age: "",
  gender: "Please select a gender",
  password: "Must have 1 uppercase and 1 number",
  confirmPassword: "Passwords do not match",
  profilePhoto: ""
}
```

- On clicking **Next** → run that step's `validate()` → if errors exist, set errors state and **block navigation**
- On clicking **Back** → skip validation entirely
- On clicking **Submit** (Step 4) → run Step 4's `validate()` only
- **Errors must clear field-by-field** as user fixes them (onChange re-validate that specific field)

---

## 🗂️ Component Structure (Suggested)

```
App.jsx
├── StepIndicator.jsx           → shows step 1-4 with status
├── Step1PersonalInfo.jsx       → receives formData, errors, onChange
├── Step2ProfessionalInfo.jsx   → receives formData, errors, onChange
├── Step3Skills.jsx             → receives formData, errors, onChange
├── Step4Preferences.jsx        → receives formData, errors, onChange
└── ReviewCard.jsx              → receives full formData, onReset
```

---

## ✅ Outcomes You Must Achieve

- [ ] Multi-step with **forward/backward navigation**
- [ ] **State persists** across all steps on back navigation
- [ ] **Per-step validation only** on Next click
- [ ] **Step indicator** with completed / active / pending states
- [ ] **Jump back** to completed steps by clicking step number
- [ ] All input types handled — text, number, password, date, file, radio, checkbox, select, textarea
- [ ] **Password show/hide** toggle
- [ ] **Image preview** for profile photo
- [ ] **Filename display** for resume PDF
- [ ] **Dynamic rows** in Step 3 with add/remove constraints
- [ ] **Duplicate skill name** cross-validation
- [ ] **Location checkbox** disables after 3 selected
- [ ] **Live char counter** for cover letter (with color change)
- [ ] **Submit disabled** until terms checked
- [ ] **Auto-focus/scroll** to first error field on failed Next
- [ ] **Review Card** on final submit — mask password, show image preview, show all data
- [ ] **Reset** clears everything back to `initialState`
- [ ] **Pure React + useState only** — no RHF, Zod, Formik, or any form library

---

**⏱️ Time Limit: 2 Hours**
**Stack: React + Tailwind only. No external form/validation libraries.**

> Ek baar yeh bana le haath se — forms kabhi nahi dara'enge. 🔥