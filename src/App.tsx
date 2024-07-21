import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import Layout from './layout/Layout';
import StepsLayout from './layout/StepsLayout';
import { ActiveStepProvider } from './providers/activeStepProvider';
import { InstallTypeProvider } from './providers/installTypeProvider';
import { urls } from './routes/urls';
import theme from './themes/theme.config';

// Lazy load the pages
const Home = lazy(() => import('./pages/home/Home'));

const SharedStep1 = lazy(() => import('./pages/sharedSteps/Step1'));
const SharedStep2 = lazy(() => import('./pages/sharedSteps/Step2'));

const NewInstallStep3 = lazy(() => import('./pages/newInstallSteps/Step3'));
const NewInstallStep4 = lazy(() => import('./pages/newInstallSteps/Step4'));
const NewInstallStep5 = lazy(() => import('./pages/newInstallSteps/Step5'));
const NewInstallStep6 = lazy(() => import('./pages/newInstallSteps/Step6'));
const NewInstallStep7 = lazy(() => import('./pages/newInstallSteps/Step7'));

const MainServerStep3 = lazy(() => import('./pages/mainServerInstallSteps/Step3'));
const MainServerStep4 = lazy(() => import('./pages/mainServerInstallSteps/Step4'));
const MainServerStep5 = lazy(() => import('./pages/mainServerInstallSteps/Step5'));

const BackupStep3 = lazy(() => import('./pages/backupInstallSteps/Step3'));
const BackupStep4 = lazy(() => import('./pages/backupInstallSteps/Step4'));
const BackupStep5 = lazy(() => import('./pages/backupInstallSteps/Step5'));

const App: React.FC = () => {
  return (
    <InstallTypeProvider>
      <ActiveStepProvider>
        <CssVarsProvider theme={theme}>
          <Router basename='/hiddify-admin-front'>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path='/' element={<StepsLayout />}>
                    <Route path={urls.sharedSteps.step1} element={<SharedStep1 />} />
                    <Route path={urls.sharedSteps.step2} element={<SharedStep2 />} />

                    {/* new install steps */}
                    <Route path={urls.newInstallSteps.step3} element={<NewInstallStep3 />} />
                    <Route path={urls.newInstallSteps.step4} element={<NewInstallStep4 />} />
                    <Route path={urls.newInstallSteps.step5} element={<NewInstallStep5 />} />
                    <Route path={urls.newInstallSteps.step6} element={<NewInstallStep6 />} />
                    <Route path={urls.newInstallSteps.step7} element={<NewInstallStep7 />} />

                    {/* backup install steps */}
                    <Route path={urls.backupInstallSteps.step3} element={<BackupStep3 />} />
                    <Route path={urls.backupInstallSteps.step4} element={<BackupStep4 />} />
                    <Route path={urls.backupInstallSteps.step5} element={<BackupStep5 />} />

                    {/* main server install steps */}
                    <Route path={urls.mainServerInstallSteps.step3} element={<MainServerStep3 />} />
                    <Route path={urls.mainServerInstallSteps.step4} element={<MainServerStep4 />} />
                    <Route path={urls.mainServerInstallSteps.step5} element={<MainServerStep5 />} />
                  </Route>
                </Route>
              </Routes>
            </Suspense>
          </Router>
        </CssVarsProvider>
      </ActiveStepProvider>
    </InstallTypeProvider>
  );
};

export default App;
