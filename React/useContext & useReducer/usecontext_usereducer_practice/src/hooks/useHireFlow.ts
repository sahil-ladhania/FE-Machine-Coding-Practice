
import { useContext } from "react";
import { HireFlowContext } from "../context/HireFlowContext";
import type { HireFlowContextType } from "../types/hireFlowTypes";

export function useHireFlow(): HireFlowContextType {
    const context = useContext(HireFlowContext);

    if (!context){
        throw new Error("useHireFlow must be used within HireFlowProvider");
    };

    return context;
};