import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './Navbar.css';
import logo from '../assets/logo.svg';
import Basketball from '../assets/Basketball.svg';
import SoccerBall from '../assets/SoccerBall.svg';
import TennisBall from '../assets/TennisBall.svg';
import CaretDown from '../assets/CaretDown.svg';
import TelegramLogo from '../assets/TelegramLogo.svg';
import US from '../assets/US.svg';

const classNameFunc = ({ isActive }) => (isActive ? 'active_link' : '');

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Controlled form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Reset form inputs
  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  // Handle login or register submit
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      if (!isRegistered) {
        alert('Please register before logging in.');
        return;
      }
      // Simulate successful login
      setIsAuthenticated(true);
      setShowAuthModal(false);
      resetForm();
    } else {
      // Register flow: check passwords match
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
      // Register user once
      setIsRegistered(true);
      setShowAuthModal(false);
      resetForm();
    }
  };

  // Logout handler
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <div className="w-full bg-[#1A1A1A] border-b">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar */}
          <div className="h-[76px] flex justify-between items-center">
            <img src={logo} className="h-[48px] w-[48px]" alt="Logo" />
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-8 text-white">
                <button className="text-[14px] flex items-center hover:text-yellow-500">
                  Join us telegram
                  <img src={TelegramLogo} className="mx-2 h-[16px] w-[16px]" alt="Telegram" />
                </button>
                <button className="text-[12px] flex items-center hover:text-yellow-500">
                  <img src={US} className="mx-4 h-[16px] w-[16px]" alt="US" />
                  English (US)
                  <img src={CaretDown} className="mx-2 h-[16px] w-[16px]" alt="Caret" />
                </button>
              </div>

              <div className="flex gap-4 items-center text-white">
                {!isAuthenticated ? (
                  <>
                    <button
                      onClick={() => {
                        setIsLogin(true);
                        setShowAuthModal(true);
                      }}
                      className="text-[14px] font-semibold hover:text-yellow-500"
                    >
                      Login
                    </button>
                    {!isRegistered && (
                      <button
                        onClick={() => {
                          setIsLogin(false);
                          setShowAuthModal(true);
                        }}
                        className="bg-yellow-500 rounded-[20px] px-5 py-2 text-[14px] font-semibold text-black hover:text-white"
                      >
                        Register
                      </button>
                    )}
                  </>
                ) : (
                  <button onClick={handleLogout} className="text-[14px] font-semibold hover:text-yellow-500">
                    Logout
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="h-[64px] hidden md:flex items-center">
            <ul className="flex gap-12 text-[16px] text-white items-center">
              <li><NavLink className={classNameFunc} to="/">Home</NavLink></li>
              <li className="flex items-center">
                <img src={SoccerBall} className="mx-2 h-[16px] w-[16px]" alt="Soccer" />
                <NavLink className={classNameFunc} to="/football">Football</NavLink>
              </li>
              <li className="flex items-center">
                <img src={Basketball} className="mx-2 h-[16px] w-[16px]" alt="Basketball" />
                <NavLink className={classNameFunc} to="/basketball">Basketball</NavLink>
              </li>
              <li className="flex items-center">
                <img src={TennisBall} className="mx-2 h-[16px] w-[16px]" alt="Tennis" />
                <NavLink className={classNameFunc} to="/tennis">Tennis</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#1A1A1A] px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <img src={logo} className="h-8" alt="Logo" />
            <button onClick={() => setMobileMenuOpen(false)} className="rounded-md text-white">
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6">
                <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-semibold text-white hover:bg-gray-800">Home</NavLink>
                <NavLink to="/football" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-semibold text-white hover:bg-gray-800">Football</NavLink>
                <NavLink to="/basketball" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-semibold text-white hover:bg-gray-800">Basketball</NavLink>
                <NavLink to="/tennis" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-semibold text-white hover:bg-gray-800">Tennis</NavLink>
              </div>

              <div className="py-6">
                {!isAuthenticated ? (
                  <>
                    <button
                      onClick={() => {
                        setIsLogin(true);
                        setShowAuthModal(true);
                        setMobileMenuOpen(false);
                      }}
                      className="block px-3 py-2.5 text-base font-semibold text-white hover:bg-gray-800 w-full text-left"
                    >
                      Login
                    </button>
                    {!isRegistered && (
                      <button
                        onClick={() => {
                          setIsLogin(false);
                          setShowAuthModal(true);
                          setMobileMenuOpen(false);
                        }}
                        className="block px-3 py-2.5 text-base font-semibold text-white hover:bg-gray-800 w-full text-left"
                      >
                        Register
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="block px-3 py-2.5 text-base font-semibold text-white hover:bg-gray-800 w-full text-left"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      {/* Auth Modal */}
      <Dialog
        open={showAuthModal}
        onClose={() => {
          setShowAuthModal(false);
          resetForm();
        }}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6 w-full">
            <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 mb-4">
              {isLogin ? 'Login to Your Account' : 'Create an Account'}
            </Dialog.Title>

            <form className="space-y-4" onSubmit={handleAuthSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-600"
              >
                {isLogin ? 'Login' : 'Register'}
              </button>
            </form>

            <div className="mt-4 text-center">
              {!isAuthenticated && (
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                    resetForm();
                  }}
                  className="text-sm text-gray-600 hover:text-yellow-500"
                >
                  {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
                </button>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Navbar;
