import { useState } from "react";
import { tabsData } from "../../mock-data/tabs";

export default function TabsComponent() {
    // State Variables
    const [activeTab , setActiveTab] = useState<number>(tabsData[0].id);

    // Handler Functions
    const showActiveTab = (tabID : number) => {
        console.log(`Is this the tab you want to see : ${tabID} ?`);
        setActiveTab(tabID);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const currentIndex = tabsData.findIndex((tab) => tab.id === activeTab);
        console.log(currentIndex);
        
        if(e.key === "ArrowRight"){
            if(currentIndex < (tabsData.length - 1)){
                setActiveTab(tabsData[currentIndex + 1].id);
            };
        };

        if(e.key === "ArrowLeft"){
            if(currentIndex > 0){
                setActiveTab(tabsData[currentIndex - 1].id);
            };
        };
    };

    return (
        <div>
            {/* Tab Buttons */}
            <div className="flex align-center h-10 justify-between">
                {
                    tabsData?.map((tab) => (
                        <button 
                            key={tab.id} 
                            disabled={tab.disabled}
                            onKeyDown={handleKeyDown}
                            onClick={() => showActiveTab(tab.id)} 
                            className={`w-4/12 ${tab.disabled === true ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${tab.id === activeTab ? "border-b-3 border-b-indigo-500" : ""}`}
                        >
                            {tab.title}
                        </button>
                    ))
                }
            </div>
            {/* Tab Content */}
            <p className="py-4">
                {
                    tabsData.find((tab) => activeTab === tab.id)?.content
                }
            </p>
        </div>
    );
};