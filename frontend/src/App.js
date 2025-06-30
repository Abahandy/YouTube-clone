import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import {
  Header,
  Sidebar,
  VideoGrid,
  VideoPlayer,
  SearchResults
} from './components';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    // Apply dark mode class to document root
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-black dark:text-white">
          <Header 
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setSearchActive={setSearchActive}
          />
          <div className="flex">
            <Sidebar 
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-16'}`}>
              <Routes>
                <Route path="/" element={
                  searchActive ? 
                    <SearchResults searchQuery={searchQuery} setSearchActive={setSearchActive} /> :
                    <VideoGrid />
                } />
                <Route path="/watch/:videoId" element={<VideoPlayer />} />
                <Route path="/search" element={<SearchResults searchQuery={searchQuery} setSearchActive={setSearchActive} />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;