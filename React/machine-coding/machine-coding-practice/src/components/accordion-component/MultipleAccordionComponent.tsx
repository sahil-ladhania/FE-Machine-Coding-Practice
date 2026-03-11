import { ChevronDown, ChevronUp } from "lucide-react";
import type { accordion } from "../../types/accordionType";
import { useState } from "react";

type AccordionProps = {
    data: accordion[];
};

export default function MultipleAccordionComponent({ data }: AccordionProps) {
    // State Variables
    const [activeIDs , setActiveIDs] = useState<number[]>([]);

    // Handler Functions
    const toggleAccordion = (accordionID: number) => {
        console.log(`Do you want to toggle this AccordionID : ${accordionID}`);
        if(activeIDs.includes(accordionID)){
            const filteredAccordions = activeIDs.filter((a) => a !== accordionID);
            setActiveIDs(filteredAccordions);
        }
        else{
            setActiveIDs([...activeIDs , accordionID]);
        }
    };

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            {
                data?.map((a) => (
                    <div key={a?.id}>
                        {/* Header */}
                        <button onClick={() => toggleAccordion(a?.id)} className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                            <span className="font-medium text-gray-800">{a.title}</span>
                            {
                                (activeIDs.includes(a?.id)) ?
                                    <ChevronUp className="w-5 h-5 text-gray-500" />
                                    :
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                            }
                        </button>
                        
                        {/* Content */}
                        {
                            activeIDs.includes(a?.id) ?
                                <div className="p-4 bg-white border-t border-gray-200">
                                    <p className="text-gray-600 text-sm">
                                        {a.content}
                                    </p>
                                </div>
                                :
                                null
                        }
                    </div>
                ))
            }
        </div>
    );
};