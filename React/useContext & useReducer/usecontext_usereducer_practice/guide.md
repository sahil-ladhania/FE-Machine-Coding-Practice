# HireFlow — Implementation Guide

> No code. Just the exact step-by-step thinking you need.

---

## Overall Architecture Decision

Since you're using `useContext` + `useReducer`:

- **useReducer** holds the **entire app state** in one place (formData + currentStep + errors)
- **useContext** distributes that state + dispatch to every component — no prop drilling
- Each component reads what it needs from context directly

The reducer state shape will be:
```
{
  currentStep: number,
  formData: { ...all form fields },
  errors: { ...all error fields }
}
```

---

## Files You Will Create (in order)

```
src/
├── types/
│   └── hireFlowTypes.ts          ← all TypeScript types/interfaces
├── context/
│   └── HireFlowContext.tsx       ← createContext + Provider component
├── reducer/
│   └── hireFlowReducer.ts        ← initialState + reducer function
└── helpers/
    ├── validators.ts             ← 4 validate functions (one per step)
    └── utils.ts                  ← generateId helper
```

---

## Step 1 — Define Your Types (`hireFlowTypes.ts`)

Define these interfaces/types:

**Skill**
- `id`: string
- `name`: string
- `proficiency`: string
- `experience`: string

**FormData**
- All fields from the `initialState` in details.md
- `skills` is `Skill[]`
- `profilePhoto` is `File | null`
- `resume` is `File | null`
- `workModes` is `string[]`
- `locations` is `string[]`

**FormErrors**
- One optional string field per every form field name
- `skills` error is special — it's `SkillError[]` where each `SkillError` has optional `name`, `proficiency`, `experience` string fields

**Action Types**
Define a union type for all possible dispatch actions:
- `UPDATE_FIELD` — payload: `{ name: string, value: string }`
- `UPDATE_FILE` — payload: `{ name: string, value: File | null }`
- `UPDATE_CHECKBOX` — payload: `{ name: string }` (toggles a boolean field)
- `UPDATE_CHECKBOX_ARRAY` — payload: `{ name: string, value: string }` (adds/removes from array)
- `ADD_SKILL` — no payload
- `REMOVE_SKILL` — payload: `{ id: string }`
- `UPDATE_SKILL` — payload: `{ id: string, field: string, value: string }`
- `SET_STEP` — payload: `{ step: number }`
- `SET_ERRORS` — payload: `{ errors: FormErrors }`
- `CLEAR_FIELD_ERROR` — payload: `{ field: string }`
- `CLEAR_SKILL_ERROR` — payload: `{ index: number, field: string }` (separate action for skill row errors)
- `RESET` — no payload

**Context Type**
- `state`: the full reducer state (currentStep + formData + errors)
- `dispatch`: the dispatch function typed with your Action union

---

## Step 2 — Create Utils (`utils.ts`)

One function: `generateId()`

Use `crypto.randomUUID()` — it's built into modern browsers. Returns a unique string. You'll use this every time you add a new skill row.

---

## Step 3 — Create the Reducer (`hireFlowReducer.ts`)

**`initialState`** — wrap the fields from details.md like this:
```
{
  currentStep: 1,
  formData: { ...all fields, skills starts with 2 rows each using generateId() },
  errors: {}
}
```

**Reducer logic per action:**

- `UPDATE_FIELD` → spread `formData`, update `formData[name] = value`
- `UPDATE_FILE` → same but value is `File | null`
- `UPDATE_CHECKBOX` → flip `formData[name]` boolean (true → false, false → true)
- `UPDATE_CHECKBOX_ARRAY` → if value already exists in the array, remove it; if not, add it. For `locations` specifically, don't add if array already has 3 items.
- `ADD_SKILL` → spread existing skills array, push a new skill object with `generateId()`
- `REMOVE_SKILL` → filter out the skill whose `id` matches payload
- `UPDATE_SKILL` → map over skills, find matching `id`, spread that skill, update only the specified `field`
- `SET_STEP` → update `currentStep`
- `SET_ERRORS` → update `errors`
- `CLEAR_FIELD_ERROR` → spread `errors`, set `errors[field] = undefined`
- `CLEAR_SKILL_ERROR` → spread `errors`, spread `errors.skills`, update the specific index's specific field to `undefined`
- `RESET` → return `initialState`

---

## Step 4 — Create Context + Provider (`HireFlowContext.tsx`)

1. `createContext` with your Context Type (use `null` as default and handle the null case in the custom hook)
2. Create `HireFlowProvider` component:
   - Inside, call `useReducer(hireFlowReducer, initialState)`
   - Provide `{ state, dispatch }` as the context value
   - Wrap `children` with the Provider
3. Create a custom hook `useHireFlow()`:
   - Calls `useContext(HireFlowContext)`
   - If context is null, throw an error: `"useHireFlow must be used inside HireFlowProvider"`
   - This is the **only** import every component needs

---

## Step 5 — Create Validators (`validators.ts`)

Four functions. Each takes `formData` and returns a `FormErrors` object. Only add a field to the errors object if it actually has an error — leave valid fields out entirely.

**`validateStep1(formData)`**
- `fullName`: required, min 3 chars
- `age`: required, must be between 18 and 60
- `gender`: required (cannot be empty string)
- `password`: required, min 8 chars, must match regex for at least one uppercase letter, must match regex for at least one number
- `confirmPassword`: must equal `formData.password`
- `profilePhoto`: must be a `File` object, `file.type` must be `image/jpeg` or `image/png`, `file.size` must be <= 2MB (2 * 1024 * 1024)

**`validateStep2(formData)`**
- `currentRole`: required
- `department`: required (not empty string)
- `employmentType`: required
- `expectedSalary`: required, must be >= 100000
- `joiningDate`: required, must be in the future — parse the `YYYY-MM-DD` string into a Date and compare with `new Date()`
- `resume`: must be a `File` object, `file.type` must be `"application/pdf"`, `file.size` must be <= 5MB

**`validateStep3(formData)`**
- Loop over `formData.skills` with index
- For each skill: `name` required, `proficiency` required, `experience` required and must be 0-30
- **Duplicate check**: collect all names (lowercased), for each skill check if its name appears more than once in the array — if yes, set that skill's name error to "Duplicate skill name"
- Return `{ skills: [{ name: "...", proficiency: "...", experience: "..." }, ...] }` — array index matches skill array index. Only populate fields that have errors.

**`validateStep4(formData)`**
- `workModes`: array must have length >= 1
- `locations`: array must have length >= 1
- `coverLetter`: required, length must be >= 100 and <= 500
- `agreeToTerms`: must be `true`

**`hasErrors(errors)` helper**
Write this utility in the same file. It checks if the errors object has any actual error messages — needs to handle the nested `skills` array case. Returns `true` if any error exists, `false` if completely clean.

---

## Step 6 — Wrap App with Provider (`App.tsx`)

Wrap everything inside `<HireFlowProvider>`. Remove `StepIndicatorComponent` and `ReviewCardComponent` from here — they'll live inside `HireFlow.tsx`. App.tsx should just be:

```
HireFlowProvider
  └── HireFlow
```

---

## Step 7 — Update `HireFlow.tsx` (Navigation Brain)

1. Call `useHireFlow()` to get `state` and `dispatch`
2. Destructure `currentStep`, `formData`, `errors` from `state`
3. **Conditional rendering** — replace all 4 steps rendering at once with a single conditional block showing only the active step. Map currentStep number to the right component. Step 5 shows ReviewCard.
4. **Next button onClick**:
   - Call the right validator based on `currentStep`
   - If `hasErrors(errors)` is true → dispatch `SET_ERRORS` → return early (block navigation)
   - If clean → dispatch `SET_ERRORS` with `{}` to wipe old errors → dispatch `SET_STEP` with `currentStep + 1`
5. **Back button onClick**:
   - Just dispatch `SET_STEP` with `currentStep - 1`
6. **Step label** between buttons — derive from a `steps` lookup array using `currentStep`
7. **Hide Back** on step 1. **Hide Next** on step 5. The Submit button lives inside ReviewCard itself.
8. Move `StepIndicatorComponent` inside this component's JSX (at the top)

---

## Step 8 — Update `StepIndicatorComponent.tsx`

1. Call `useHireFlow()` — get `state.currentStep`
2. Remove the hardcoded `const currentStep = 1`
3. Completed steps (`step.id < currentStep`) → make the circle a clickable button → `onClick` dispatches `SET_STEP`
4. Active and pending steps → no click handler, just visual styling

---

## Step 9 — Update `Step_1_Form_Component.tsx`

1. Call `useHireFlow()` — get `formData`, `errors`, `dispatch` from state
2. Every text/number input:
   - `value` = `formData.fieldName`
   - `onChange` → dispatch `UPDATE_FIELD` → also dispatch `CLEAR_FIELD_ERROR`
   - Show `errors.fieldName` below input if it exists
3. Radio buttons: same `UPDATE_FIELD` pattern, `value` = `formData.gender`
4. Profile photo file input:
   - `onChange` → dispatch `UPDATE_FILE` with `e.target.files[0]`
   - Also dispatch `CLEAR_FIELD_ERROR`
   - **Image preview** → use `useEffect` watching `formData.profilePhoto`. When it changes, call `URL.createObjectURL()` and store result in **local useState**. Return a cleanup that calls `URL.revokeObjectURL()`. Render an `<img>` if the URL exists.
5. Password show/hide → **local useState** for a `showPassword` boolean. Toggle on icon button click. Change input `type` between `"password"` and `"text"`.

---

## Step 10 — Update `Step_2_Form_Component.tsx`

1. Same `useHireFlow()` pattern
2. Text/number/select/radio inputs → same `UPDATE_FIELD` + `CLEAR_FIELD_ERROR` pattern
3. Date input:
   - Set `min` attribute to today's date formatted as `YYYY-MM-DD`
   - `value` = `formData.joiningDate`
   - `onChange` → `UPDATE_FIELD`
4. Resume file input:
   - `onChange` → dispatch `UPDATE_FILE`
   - Show filename below: render `formData.resume?.name` as plain text (no preview needed)

---

## Step 11 — Update `Step_3_Form_Component.tsx`

1. Call `useHireFlow()` — get `formData.skills`, `errors.skills`, `dispatch`
2. Replace the two hardcoded rows with `.map()` over `formData.skills`
3. Each input in a row:
   - `value` = `skill.fieldName`
   - `onChange` → dispatch `UPDATE_SKILL` with `{ id: skill.id, field: "name"/"proficiency"/"experience", value }`
   - `onChange` also → dispatch `CLEAR_SKILL_ERROR` with `{ index, field }`
   - Show error from `errors.skills?.[index]?.fieldName` below input
4. Add Skill button: `disabled={formData.skills.length >= 6}`, `onClick` → dispatch `ADD_SKILL`
5. Delete icon button: `disabled={formData.skills.length <= 2}`, `onClick` → dispatch `REMOVE_SKILL` with `{ id: skill.id }`
   - Remove the hardcoded `disabled` from the UI phase, replace with dynamic condition above

---

## Step 12 — Update `Step_4_Form_Component.tsx`

1. Call `useHireFlow()` — get `formData`, `errors`, `dispatch`
2. Work mode checkboxes:
   - `checked` = `formData.workModes.includes(value)`
   - `onChange` → dispatch `UPDATE_CHECKBOX_ARRAY` with `{ name: "workModes", value }`
3. Location checkboxes:
   - `checked` = `formData.locations.includes(value)`
   - `disabled` = `formData.locations.length >= 3 && !formData.locations.includes(value)`
   - `onChange` → dispatch `UPDATE_CHECKBOX_ARRAY` with `{ name: "locations", value }`
4. Willing to relocate checkbox:
   - `checked` = `formData.willingToRelocate`
   - `onChange` → dispatch `UPDATE_CHECKBOX` with `{ name: "willingToRelocate" }`
5. Cover letter textarea:
   - `value` = `formData.coverLetter`
   - `onChange` → dispatch `UPDATE_FIELD` + `CLEAR_FIELD_ERROR`
   - Live counter: `{formData.coverLetter.length} / 500`
   - Counter color class: red if length < 100, green if length >= 100
6. Terms checkbox:
   - `checked` = `formData.agreeToTerms`
   - `onChange` → dispatch `UPDATE_CHECKBOX` with `{ name: "agreeToTerms" }`
7. Newsletter checkbox: same pattern, `UPDATE_CHECKBOX` for `newsletter`

---

## Step 13 — Update `ReviewCardComponent.tsx`

1. Call `useHireFlow()` — get `formData`, `dispatch`
2. Replace all static strings with real `formData` values
3. Password: show `"*".repeat(formData.password.length)` — never show raw password
4. Profile photo: same `useEffect` + `URL.createObjectURL` + local state pattern as Step 1. Render `<img>` if URL exists.
5. Skills: `.map()` over `formData.skills` to render rows
6. Work modes / locations: `.join(", ")` the arrays
7. Submit button: `onClick` → `console.log(formData)` for now, or dispatch `RESET` after showing a success message
8. Reset button: dispatch `RESET`

---

## Recommended Coding Order

```
1.  hireFlowTypes.ts             ← define all types first
2.  utils.ts                     ← generateId
3.  hireFlowReducer.ts           ← initialState + reducer
4.  HireFlowContext.tsx           ← context + provider + useHireFlow hook
5.  App.tsx                      ← wrap with provider, clean up
6.  HireFlow.tsx                 ← navigation logic + conditional rendering
7.  StepIndicatorComponent.tsx   ← connect to currentStep
8.  Step_1_Form_Component.tsx    ← wire inputs
9.  Step_2_Form_Component.tsx    ← wire inputs
10. Step_3_Form_Component.tsx    ← dynamic rows
11. Step_4_Form_Component.tsx    ← checkboxes + live counter
12. ReviewCardComponent.tsx      ← display all data
13. validators.ts                ← write all 4 validators + hasErrors
    (import validators into HireFlow.tsx)
```

---

## Common Gotchas

- **File objects** are not plain values — keep them as `File | null` in state. Never try to serialize them.
- **`URL.createObjectURL()` leaks memory** — always clean up with `URL.revokeObjectURL()` in the `useEffect` cleanup function.
- **Skills errors are an array** — `errors.skills?.[index]?.name`, not `errors.skillName`.
- **`hasErrors()` needs deep check** — an errors object with `{ skills: [{}, {}] }` looks non-empty but has no actual error messages. Don't just check `Object.keys(errors).length`.
- **Two places where local `useState` is correct and expected**:
  1. Password show/hide toggle (pure UI, not form data)
  2. Profile photo preview URL (derived side-effect of a File object)
- **`CLEAR_SKILL_ERROR` is separate from `CLEAR_FIELD_ERROR`** — skill errors are nested inside an array, so you need the index + field to clear them precisely.
