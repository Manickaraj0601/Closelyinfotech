import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import FeedbackModal from './components/FeedbackModal';
import Toast from './components/Toast';
import CustomCursor from './components/CustomCursor';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Restore saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('cit-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('cit-theme', nextTheme);
    showToast(nextTheme === 'light' ? '☀️ Light mode on' : '🌙 Dark mode on');
  };

  const showToast = (text) => {
    setToastMessage(text);
    setIsToastVisible(true);
  };

  useEffect(() => {
    if (isToastVisible) {
      const timer = setTimeout(() => {
        setIsToastVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isToastVisible]);

  return (
    <>
      <CustomCursor />
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenFeedback={() => setIsFeedbackOpen(true)} 
      />
      <Home 
        onOpenFeedback={() => setIsFeedbackOpen(true)} 
        onShowToast={showToast} 
      />
      <FeedbackModal 
        isOpen={isFeedbackOpen} 
        onClose={() => setIsFeedbackOpen(false)} 
        onShowToast={showToast} 
      />
      <Toast 
        message={toastMessage} 
        isVisible={isToastVisible} 
      />
    </>
  );
}

export default App;
