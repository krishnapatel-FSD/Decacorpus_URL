import React from 'react';
import { useApp } from './context/AppContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import { BackgroundShardsCanvas } from './components/canvas/BackgroundShardsCanvas';
import { Preloader } from './components/ui/Preloader';
import { CustomCursor } from './components/ui/CustomCursor';
import { PageTransitionCurtain } from './components/layout/PageTransitionCurtain';
import { FloatingNav } from './components/layout/FloatingNav';
import { MenuOverlay } from './components/layout/MenuOverlay';
import { ChapterDots } from './components/layout/ChapterDots';
import { ServiceDrawer } from './components/ui/ServiceDrawer';
import { Wordmark } from './components/layout/Wordmark';
import { Footer } from './components/layout/Footer';
import { NextPageBar } from './components/layout/NextPageBar';

import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Services } from './pages/Services';
import { Studio } from './pages/Studio';
import { Insights } from './pages/Insights';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';

export const App = () => {
  const { currentRoute } = useApp();

  // Attach scroll reveal observer across page transitions
  useScrollReveal(currentRoute);

  const renderPage = () => {
    switch (currentRoute) {
      case '#/work':
        return <Work />;
      case '#/services':
        return <Services />;
      case '#/studio':
        return <Studio />;
      case '#/insights':
        return <Insights />;
      case '#/careers':
        return <Careers />;
      case '#/contact':
        return <Contact />;
      case '#/':
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f2f0ea] selection:bg-[var(--lm)] selection:text-[#0a0a0a]">
      {/* 1. Preloader Screen */}
      <Preloader />

      {/* 2. WebGL/Canvas Background */}
      <BackgroundShardsCanvas />

      {/* 3. Magnetic Custom Cursor */}
      <CustomCursor />

      {/* 4. Fullscreen Transition Wipe Curtain */}
      <PageTransitionCurtain />

      {/* 5. Floating Header Navigation */}
      <FloatingNav />

      {/* 6. Mobile / Desktop Fullscreen Menu Overlay */}
      <MenuOverlay />

      {/* 7. Home Chapter Dots Navigator */}
      <ChapterDots />

      {/* 8. Main Dynamic Page Route Container */}
      <main id="app" className="relative z-[1]">
        {renderPage()}
      </main>

      {/* 9. Brand Wordmark */}
      <Wordmark />

      {/* 10. Footer */}
      <Footer />

      {/* 11. Next Page Wheel Trigger Bar */}
      <NextPageBar />

      {/* 12. Slide-over Service Detail Drawer */}
      <ServiceDrawer />
    </div>
  );
};

export default App;
