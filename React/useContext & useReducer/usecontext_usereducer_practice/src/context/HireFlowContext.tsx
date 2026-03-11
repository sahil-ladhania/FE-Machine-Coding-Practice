
import { createContext, useReducer } from "react";
import type { HireFlowContextType } from "../types/hireFlowTypes";
import { hireFlowReducer, initialState } from "../reducers/hireFlowReducer";

export const HireFlowContext = createContext<HireFlowContextType | null>(null);

export default function HireFlowProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(hireFlowReducer, initialState);

    return (
        <HireFlowContext.Provider value={{ state, dispatch }}>
            {children}
        </HireFlowContext.Provider>
    );
};
