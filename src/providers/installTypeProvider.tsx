import React, { createContext, useContext, useEffect, useState } from 'react';
import { urls } from '../routes/urls';

type TInstallTypes = 'new-install' | 'main-server-install' | 'backup-install';

export type TStep = {
  label: string;
  title: string;
  route: string;
};

type TInstallTypeContext = {
  installType: TInstallTypes;
  setInstallType: React.Dispatch<React.SetStateAction<TInstallTypes>>;
  steps: TStep[];
};

const InstallTypeContext = createContext<TInstallTypeContext | undefined>(undefined);

const stepsObj = {
  newInstallSteps: [
    { label: 'Start', title: 'Welcom To Hiddify', route: urls.sharedSteps.step1 },
    {
      label: 'installation',
      title: 'Specify the installation type',
      route: urls.sharedSteps.step2,
    },
    { label: 'Step 3', title: 'Domain', route: urls.newInstallSteps.step3 },
    { label: 'Step 4', title: 'Settings', route: urls.newInstallSteps.step4 },
    { label: 'Step 5', title: 'Proxy', route: urls.newInstallSteps.step5 },
    { label: 'Step 6', title: 'Apply', route: urls.newInstallSteps.step6 },
    { label: 'Step 7', title: 'Finish', route: urls.newInstallSteps.step7 },
  ],
  mainServerInstallSteps: [
    { label: 'Start', title: 'Welcom To Hiddify', route: urls.sharedSteps.step1 },
    {
      label: 'installation',
      title: 'Specify the installation type',
      route: urls.sharedSteps.step2,
    },
    { label: 'Step 3', title: 'Domain', route: urls.mainServerInstallSteps.step3 },
    { label: 'Step 4', title: 'Connection', route: urls.mainServerInstallSteps.step4 },
    { label: 'Step 5', title: 'Finish', route: urls.mainServerInstallSteps.step5 },
  ],
  backUpInstallSteps: [
    { label: 'Start', title: 'Welcom To Hiddify', route: urls.sharedSteps.step1 },
    {
      label: 'installation',
      title: 'Specify the installation type',
      route: urls.sharedSteps.step2,
    },
    { label: 'Step 3', title: 'Backup', route: urls.backupInstallSteps.step3 },
    { label: 'Step 4', title: 'Apply', route: urls.backupInstallSteps.step4 },
    { label: 'Step 5', title: 'Finish', route: urls.backupInstallSteps.step5 },
  ],
};

export const InstallTypeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [installType, setInstallType] = useState<TInstallTypes>(() => {
    const type = localStorage.getItem('install-type') as TInstallTypes;
    return type === 'main-server-install'
      ? 'main-server-install'
      : type === 'backup-install'
        ? 'backup-install'
        : 'new-install';
  });

  const [steps, setSteps] = useState<TStep[]>(stepsObj.newInstallSteps);

  useEffect(() => {
    if (installType === 'backup-install') {
      setSteps(stepsObj.backUpInstallSteps);
    } else if (installType === 'main-server-install') {
      setSteps(stepsObj.mainServerInstallSteps);
    } else {
      setSteps(stepsObj.newInstallSteps);
    }
  }, [installType]);

  return (
    <InstallTypeContext.Provider value={{ installType, setInstallType, steps }}>
      {children}
    </InstallTypeContext.Provider>
  );
};

export const useInstallType = (): TInstallTypeContext => {
  const context = useContext(InstallTypeContext);
  if (!context) {
    throw new Error('useInstallType must be used within an InstallTypeProvider');
  }
  return context;
};
