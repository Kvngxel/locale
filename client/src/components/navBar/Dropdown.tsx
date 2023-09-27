import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add an event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="p-2 text-gray-800 focus:outline-none"
        onClick={toggleDropdown}
      >
        <div
          className={`w-6 h-0.5 bg-gray-800 my-1 transition-transform 
            ${ isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-gray-800 my-1 transition-opacity 
            ${ isOpen ? 'opacity-0' : ''}`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-gray-800 my-1 transition-transform 
            ${ isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
        ></div>
      </button>
      {isOpen && (
        <div className="absolute top-14  right-0 w-[300px] mt-2 bg-white border
            border-gray-300 shadow-md rounded">
          <ul>
            <li>
              <Link className="block px-10 pt-5 pb-4 text-gray-800 hover:bg-gray-200 hover:text-sec3
                hover:font-semibold custom-selection" to={'/'}>Home</Link>
            </li>
            <li>
              <Link className="block px-10 pt-5 pb-4 text-gray-800 hover:bg-gray-200 hover:text-sec3
                hover:font-semibold custom-selection" to={'/about'}>About</Link>
            </li>
            <li>
              <Link className="block px-10 pt-5 pb-4 text-gray-800 hover:bg-gray-200 hover:text-sec3
                hover:font-semibold custom-selection" to={'/contact'}>Contact</Link> 
            </li>
            <hr/>
            <li>
              <Link className="block px-10 pt-5 pb-4 text-gray-800 hover:bg-gray-200 hover:text-sec3
                hover:font-semibold custom-selection" to={'/login'}>Log in</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
