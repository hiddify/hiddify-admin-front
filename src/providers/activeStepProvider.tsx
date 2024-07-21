import React, { createContext, useContext, useEffect, useState } from 'react';

type TActiveStepContext = {
  activeStep: number | undefined;
  setActiveStep: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const ActiveStepContext = createContext<TActiveStepContext | undefined>(undefined);

export const ActiveStepProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeStep, setActiveStep] = useState<number | undefined>(() => {
    const step = localStorage.getItem('step');
    return step ? Number(step) : undefined;
  });

  useEffect(() => {
    localStorage.setItem('step', String(activeStep));
  }, [activeStep]);

  return (
    <ActiveStepContext.Provider value={{ activeStep, setActiveStep }}>
      {children}
    </ActiveStepContext.Provider>
  );
};

export const useActiveStep = (): TActiveStepContext => {
  const context = useContext(ActiveStepContext);
  if (!context) {
    throw new Error('useActiveStep must be used within an ActiveStepProvider');
  }
  return context;
};
