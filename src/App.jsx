import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Sidebar from './components/SideBar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Clients from './pages/Clients/Clients';
import Leads from './pages/Leads/Leads';
import Analytics from './pages/Analytics/Analytics';
import Settings from './pages/Settings/Settings';

function App() {

  // récupérer le thème au chargement
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };


  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");

    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");

    }
  }, [darkMode]);

   const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"} >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}
              toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
       <div id='layout'>
        
      <Sidebar sidebarOpen={sidebarOpen} />

     <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
    </Routes>

       </div>
      <Footer />
    </div>
  );
}

export default App;