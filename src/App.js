import React from 'react';
import { Header } from './components/layouts/Header';
import { Content } from './components/layouts/Content';
import './App.scss';
import { ProjectsProvider, SelectedProjectProvider } from './context';

export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = React.useState(darkModeDefault);
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main className={darkMode ? 'darkmode' : undefined}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}
