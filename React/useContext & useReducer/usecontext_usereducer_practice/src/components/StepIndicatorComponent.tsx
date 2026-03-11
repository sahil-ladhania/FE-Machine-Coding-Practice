
const steps = [
    { id: 1, label: "Personal Info" },
    { id: 2, label: "Professional Info" },
    { id: 3, label: "Skills" },
    { id: 4, label: "Preferences" },
    { id: 5, label: "Review" },
];

const currentStep = 1;

export default function StepIndicatorComponent() {
    return (
        <div className="max-w-2xl mx-auto px-4 my-8">
            <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center flex-1 last:flex-none">
                        {/* Circle + Label */}
                        <div className="flex flex-col items-center gap-1">
                            <div
                                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2
                                    ${step.id < currentStep
                                        ? "bg-teal-500 border-teal-500 text-white"
                                        : step.id === currentStep
                                        ? "bg-blue-700 border-blue-700 text-white"
                                        : "bg-white border-slate-300 text-slate-400"
                                    }`}
                            >
                                {step.id < currentStep ? "✓" : step.id}
                            </div>
                            <span
                                className={`text-xs font-medium whitespace-nowrap
                                    ${step.id < currentStep
                                        ? "text-teal-600"
                                        : step.id === currentStep
                                        ? "text-blue-700"
                                        : "text-slate-400"
                                    }`}
                            >
                                {step.label}
                            </span>
                        </div>

                        {/* Connector Line */}
                        {index < steps.length - 1 && (
                            <div
                                className={`flex-1 h-0.5 mx-2 mb-5 ${
                                    step.id < currentStep ? "bg-teal-500" : "bg-slate-300"
                                }`}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
