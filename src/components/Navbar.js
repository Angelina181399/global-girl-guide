import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Global Girl Guide
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              首页
            </Link>
            <Link to="/outfit" className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              穿搭推荐
            </Link>
            <Link to="/body-shape" className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              体型测评
            </Link>
            <Link to="/skin-tone" className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              肤色测评
            </Link>
            <Link to="/styling-assistant" className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              搭配助手
            </Link>
            <Link to="/occasion-guide" className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              场合穿搭
            </Link>
            <Link to="/brand-guide" className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              品牌推荐
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              生活资源
            </Link>
            <Link to="/dictionary" className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              文化词典
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              社区
            </Link>
            <Link to="/login" className="btn-primary text-sm">
              登录
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/" className="text-gray-700 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium">
              首页
            </Link>
            <Link to="/outfit" className="text-gray-700 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium">
              穿搭推荐
            </Link>
            <Link to="/body-shape" className="text-gray-700 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium">
              体型测评
            </Link>
            <Link to="/skin-tone" className="text-gray-700 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium">
              肤色测评
            </Link>
            <Link to="/styling-assistant" className="text-gray-700 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium">
              搭配助手
            </Link>
            <Link to="/occasion-guide" className="text-gray-700 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium">
              场合穿搭
            </Link>
            <Link to="/brand-guide" className="text-gray-700 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium">
              品牌推荐
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium">
              生活资源
            </Link>
            <Link to="/dictionary" className="text-gray-700 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium">
              文化词典
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium">
              社区
            </Link>
            <Link to="/login" className="btn-primary w-full mt-4">
              登录
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;