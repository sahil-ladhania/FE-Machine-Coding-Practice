/**
 * COMPONENT: Tabs (Compound Component Pattern)
 * Sub-components share state via Context. No props passed between siblings.
 *
 * STEPS:
 * Step 1: Create TabsContext = createContext({ activeTab, setActiveTab })
 *
 * Step 2: Tabs (parent) component:
 *         - useState(defaultValue) for activeTab
 *         - Provide { activeTab, setActiveTab } via TabsContext.Provider
 *         - Render {children}
 *
 * Step 3: Tabs.List component:
 *         - Just a wrapper div with flex layout, renders {children}
 *
 * Step 4: Tabs.Tab component (receives value prop):
 *         - useContext(TabsContext) to get activeTab + setActiveTab
 *         - onClick → setActiveTab(value)
 *         - Apply active styles if value === activeTab
 *
 * Step 5: Tabs.Panel component (receives value prop):
 *         - useContext(TabsContext) to get activeTab
 *         - Render children ONLY if value === activeTab
 *
 * USAGE:
 * <Tabs defaultValue="tab1">
 *   <Tabs.List>
 *     <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
 *     <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
 *   </Tabs.List>
 *   <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
 *   <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
 * </Tabs>
 */

import React, { createContext, useContext, useState } from 'react';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

function Tabs({ defaultValue, children }: { defaultValue: string; children: React.ReactNode }) {
  // your code here
  throw new Error("Not implemented");
}

Tabs.List = function TabsList({ children }: { children: React.ReactNode }) {
  // your code here
  throw new Error("Not implemented");
};

Tabs.Tab = function TabsTab({ value, children }: { value: string; children: React.ReactNode }) {
  // your code here — useContext + onClick + active styles
  throw new Error("Not implemented");
};

Tabs.Panel = function TabsPanel({ value, children }: { value: string; children: React.ReactNode }) {
  // your code here — render only if value === activeTab
  throw new Error("Not implemented");
};

export { Tabs };
