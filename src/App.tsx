import { ThemeProvider } from '@mui/material/styles';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import Layout from './layout/Layout';
import darkTheme from './themes/dark.theme.config';
import lightTheme from './themes/light.theme.config';

// Lazy load the pages
const Step1 = lazy(() => import('./pages/Step1'));
const Step2 = lazy(() => import('./pages/Step2'));
const Step3 = lazy(() => import('./pages/Step3'));
const Step4 = lazy(() => import('./pages/Step4'));
const Step5 = lazy(() => import('./pages/Step5'));
const Step6 = lazy(() => import('./pages/Step6'));

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path='/'
              element={<Layout handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} />}
            >
              <Route index element={<Step1 />} />
              <Route path='step2' element={<Step2 />} />
              <Route path='step3' element={<Step3 />} />
              <Route path='step4' element={<Step4 />} />
              <Route path='step5' element={<Step5 />} />
              <Route path='step6' element={<Step6 />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
