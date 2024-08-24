import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import gsap from 'gsap';
import { Lines } from 'react-preloaders';
const App = () => {
  const cursorRef = useRef();
  const mainRef = useRef();
  const mainRefTwo = useRef();

  useEffect(() => {
    const handleMouseMove = (events) => {
      gsap.to(cursorRef.current, {
        x: events.clientX,
        y: events.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, {
        width: '300px',
        height: '300px',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1631002165164-a20c44fd12c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        lineHeight: '300px', // To center the text vertically
      });
      cursorRef.current.textContent = 'View More';
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        width: '20px',
        height: '20px',
        backgroundImage: 'none',
        color: 'transparent',
        lineHeight: 'initial',
      });
      cursorRef.current.textContent = '';
    };

    const main = mainRefTwo.current;
    main.addEventListener('mouseenter', handleMouseEnter);
    main.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      main.removeEventListener('mouseenter', handleMouseEnter);
      main.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        id="cursor"
        ref={cursorRef}
        className="w-5 mix-blend-difference h-5 fixed top-0 left-0 flex items-center justify-center bg-white rounded-full"
      ></div>
      <div id="main" ref={mainRef}>
        <Navbar />
        <Hero />
        <section ref={mainRefTwo}>
          <div className="w-full min-h-screen px-16 flex flex-col py-20">
            <div className="elem flex items-center justify-between border-t py-28">
              <h1 className="font-bold text-8xl opacity-50">THE PLUG</h1>
              <h6>2022</h6>
            </div>
            <div className="elem flex items-center justify-between border-t py-28">
              <h1 className="font-bold text-8xl opacity-50">IXPERIENCE</h1>
              <h6>2022</h6>
            </div>
            <div className="elem flex items-center border-b justify-between border-t py-28">
              <h1 className="font-bold text-8xl opacity-50">HUDO</h1>
              <h6>2022</h6>
            </div>
          </div>
        </section>
        <About />
        <Footer />
        <Lines background="#fff" time={2000} animation="slide-down"/>
      </div>
    </>
  );
};

export default App;
