import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import HoverTypingEffect from '../Components/Animation/HoverTypingEffect';
import estpl from "../assets/estpl.png"
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [separatorWidths, setSeparatorWidths] = useState([]);
  const [logoSeparatorWidth, setLogoSeparatorWidth] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const linkRefs = useRef([]);
  const logoRef = useRef(null);
  const firstLinkRef = useRef(null);

  const links = [
    { text: 'about', href: '/about' },
    { text: 'industries', href: '/industries' },
    { text: 'services', href: '/service' },
    { text: 'blog', href: '/blog' },
    { text: 'case studies', href: '/casestudies' },
    { text: 'careers', href: '/careers' },
    { text: 'contacts', href: '/contact' }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      calculateSeparatorWidths();
    };

    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollY > 0);
    };

    const calculateSeparatorWidths = () => {
      // Calculate logo separator width
      if (logoRef.current && firstLinkRef.current) {
        const logoRect = logoRef.current.getBoundingClientRect();
        const firstLinkRect = firstLinkRef.current.getBoundingClientRect();
        const logoDistance = firstLinkRect.left - logoRect.right;
        setLogoSeparatorWidth(Math.max(20, logoDistance));
      }

      // Calculate navigation separators width
      if (linkRefs.current.length < 2) return;
      
      const widths = [];
      for (let i = 0; i < linkRefs.current.length - 1; i++) {
        const currentLink = linkRefs.current[i];
        const nextLink = linkRefs.current[i + 1];
        
        if (currentLink && nextLink) {
          const currentRect = currentLink.getBoundingClientRect();
          const nextRect = nextLink.getBoundingClientRect();
          const distance = nextRect.left - currentRect.right;
          widths.push(Math.max(20, distance));
        }
      }
      setSeparatorWidths(widths);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const generateSlashes = (width) => {
    const slashWidth = 3;
    const count = Math.max(2, Math.floor(width / slashWidth));
    return '/'.repeat(count);
  };

  const Logo = () => (
    <div ref={logoRef} className="flex items-center space-x-2 ">
      <div className="w-20 h-10 rounded flex items-center justify-center text-white font-bold">
        <img src={estpl} alt='estpl' className='' />
      </div>
    </div>
  );

  return (
    <nav className="bg-[#edf2f3] py-4 ">
      <div className={`w-10/12 max-w-[1200px] mx-auto px-4  ${isScrolled ? 'fixed top-5 bg-white rounded-md left-1/2 -translate-x-1/2 z-50 shadow-lg ' : ''}`}>
        <div className="relative flex items-center justify-between">
          <div className="flex items-center py-2 w-6/12">
            <Link to="/">
                <Logo />
            </Link>
            {/* Logo separator */}
            <div 
              className="text-gray-300 items-center justify-center m-2 overflow-hidden hidden lg:flex"
              style={{ 
                width: `${logoSeparatorWidth}px`,
                fontSize: '0.5rem',
                letterSpacing: '0.5px',
              }}
            >
              {generateSlashes(logoSeparatorWidth)}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center justify-end w-6/12 ">
            {links.map((link, index) => (
              <React.Fragment key={link.text}>
                <a
                  ref={el => {
                    linkRefs.current[index] = el;
                    if (index === 0) firstLinkRef.current = el;
                  }}
                  href={link.href}
                  className={`
                    text-[12px] font-semibold whitespace-nowrap
                    group relative px-2 py-1
                    ${activeLink === link.text ? 'text-gray-900' : 'text-gray-600'}
                  `}
                  onClick={() => setActiveLink(link.text)}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-red-500 
                    bg-[length:0%_2px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] 
                    transition-all duration-500 ease-out">
                  </span>
                  <span className="relative group-hover:text-red-500 transition-colors duration-500">
                    <HoverTypingEffect text={link.text} speed={30} />
                  </span>
                </a>
                {index < links.length - 1 && (
                  <div 
                    className="text-gray-300 flex items-center justify-center overflow-hidden"
                    style={{ 
                      width: `${separatorWidths[index]}px`,
                      fontSize: '0.5rem',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {generateSlashes(separatorWidths[index])}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-1 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
            {links.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className={`block px-3 py-2 text-base hover:text-gray-900 transition-colors duration-200 ${
                  activeLink === link.text ? 'text-gray-900' : 'text-gray-600'
                }`}
                onClick={() => {
                  setActiveLink(link.text);
                  setIsMenuOpen(false);
                }}
              >
                <HoverTypingEffect text={link.text} speed={30} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;