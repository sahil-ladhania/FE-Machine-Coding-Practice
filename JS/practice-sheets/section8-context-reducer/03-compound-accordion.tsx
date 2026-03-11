/**
 * COMPONENT: Accordion (Compound Component Pattern)
 * Supports single mode (one open) and multiple mode (many open).
 *
 * STEPS:
 * Step 1: AccordionContext = createContext({ openItems, toggle, mode })
 *
 * Step 2: Accordion (parent):
 *         - If mode='single': useState<string | null>(null) for openItem
 *         - If mode='multiple': useState<Set<string>>(new Set()) for openItems
 *         - toggle(value):
 *           single mode → setOpenItem(prev => prev === value ? null : value)
 *           multiple mode → toggle value in Set (copy Set, add/delete, set new Set)
 *         - isOpen(value): returns boolean
 *         - Provide { isOpen, toggle } via context
 *
 * Step 3: Accordion.Item: just a wrapper, passes value via its own context or prop
 *
 * Step 4: Accordion.Trigger:
 *         - useContext → get toggle, isOpen
 *         - Button that calls toggle(value)
 *         - Show open/close indicator (▲/▼)
 *
 * Step 5: Accordion.Content:
 *         - Render children only if isOpen(value) is true
 *         - Add CSS transition for smooth open/close
 */

import React, { createContext, useContext, useState } from 'react';

interface AccordionContextType {
  isOpen: (value: string) => boolean;
  toggle: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

function Accordion({
  children,
  mode = 'single'
}: {
  children: React.ReactNode;
  mode?: 'single' | 'multiple';
}) {
  // your code here
  throw new Error("Not implemented");
}

Accordion.Item = function AccordionItem({ value, children }: { value: string; children: React.ReactNode }) {
  return <div>{children}</div>;
};

Accordion.Trigger = function AccordionTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  // your code here — useContext + toggle button
  throw new Error("Not implemented");
};

Accordion.Content = function AccordionContent({ value, children }: { value: string; children: React.ReactNode }) {
  // your code here — conditional render based on isOpen
  throw new Error("Not implemented");
};

export { Accordion };
