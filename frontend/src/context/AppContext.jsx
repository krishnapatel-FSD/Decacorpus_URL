import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchServices, fetchInsights, submitContact, submitPollVote } from '../services/api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || '#/');
  const [selectedPick, setSelectedPick] = useState(() => {
    try {
      return parseInt(localStorage.getItem('dc_pick') || '0', 10);
    } catch (e) {
      return 0;
    }
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [drawerService, setDrawerService] = useState(null);
  const [servicesData, setServicesData] = useState([]);
  const [insightsData, setInsightsData] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pollVotedIndex, setPollVotedIndex] = useState(() => {
    try {
      const val = localStorage.getItem('dc_poll');
      return val !== null ? parseInt(val, 10) : null;
    } catch (e) {
      return null;
    }
  });

  // Hash route listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentRoute(hash);
      setIsMenuOpen(false);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Fetch initial data from backend API with fallback
  useEffect(() => {
    const loadInitialData = async () => {
      const services = await fetchServices();
      setServicesData(services);

      const articles = await fetchInsights();
      setInsightsData(articles);
    };

    loadInitialData();
  }, []);

  // Save selected pick to localStorage
  const changePick = (index) => {
    setSelectedPick(index);
    try {
      localStorage.setItem('dc_pick', index.toString());
    } catch (e) {}
  };

  const openDrawer = (service) => {
    setDrawerService(service);
    if (service && typeof service.id === 'number') {
      changePick(service.id);
    }
  };

  const closeDrawer = () => {
    setDrawerService(null);
  };

  const handleVote = async (optionIndex) => {
    if (pollVotedIndex !== null) return;
    setPollVotedIndex(optionIndex);
    try {
      localStorage.setItem('dc_poll', optionIndex.toString());
    } catch (e) {}
    await submitPollVote(optionIndex);
  };

  return (
    <AppContext.Provider
      value={{
        currentRoute,
        setCurrentRoute,
        selectedPick,
        changePick,
        isMenuOpen,
        setIsMenuOpen,
        drawerService,
        openDrawer,
        closeDrawer,
        servicesData,
        insightsData,
        scrollProgress,
        setScrollProgress,
        pollVotedIndex,
        handleVote,
        submitContact
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
