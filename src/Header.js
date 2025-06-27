import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 flex justify-between items-center bg-white px-6 py-4 w-full shadow-md">
      <p>
        <span className="bg-gradient-to-r from-indigo-800 to-cyan-800 bg-clip-text text-transparent font-bold text-4xl">
          Immortal_4vr
        </span>
      </p>

      {/* Menu Button (Mobile Only) */}
      <div className="sm:hidden">
        <button onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden sm:flex text-gray-400 space-x-10 font-medium">
        <NavLink to="/" className="hover:text-cyan-500">HOME</NavLink>
        <NavLink to="/about" className="hover:text-cyan-500">ABOUT</NavLink>
        <NavLink to="/skills" className="hover:text-cyan-500">SKILLS</NavLink>
        <NavLink to="/project" className="hover:text-cyan-500">PROJECT</NavLink>
        <NavLink to="/contact" className="hover:text-cyan-500">CONTACT</NavLink>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 border-b">
          
          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <ul className="flex flex-col space-y-6 p-6 text-gray-600 font-medium">
          <NavLink to="/" onClick={() => setOpen(false)} className="hover:text-gray-900">HOME</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className="hover:text-gray-900">ABOUT</NavLink>
          <NavLink to="/skills" onClick={() => setOpen(false)} className="hover:text-gray-900">SKILLS</NavLink>
          <NavLink to="/project" onClick={() => setOpen(false)} className="hover:text-gray-900">PROJECT</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className="hover:text-gray-900">CONTACT</NavLink>
        </ul>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
