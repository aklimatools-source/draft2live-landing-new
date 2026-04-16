'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface EarlyAccessContextType {
  isOpen: boolean;
  selectedPlan: string | null;
  open: (plan?: string) => void;
  close: () => void;
}

const EarlyAccessContext = createContext<EarlyAccessContextType>({
  isOpen: false,
  selectedPlan: null,
  open: () => {},
  close: () => {},
});

export function EarlyAccessProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const open = useCallback((plan?: string) => {
    setSelectedPlan(plan || null);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setSelectedPlan(null);
    document.body.style.overflow = '';
  }, []);

  return (
    <EarlyAccessContext.Provider value={{ isOpen, selectedPlan, open, close }}>
      {children}
    </EarlyAccessContext.Provider>
  );
}

export function useEarlyAccess() {
  return useContext(EarlyAccessContext);
}
