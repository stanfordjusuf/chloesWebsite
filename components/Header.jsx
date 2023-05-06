import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <>
      <div
        className="navbar sticky top-0 z-50 shadow"
        style={{ background: '#ebe4d2' }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              type="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <button
              type="button"
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
              style={{ background: '#f9f2ed' }}
            >
              <ul>
                <li style={{ color: '#153579' }}>
                  <Link href="/">
                    <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                      Home
                    </a>
                  </Link>
                  <p>Blog</p>
                  {categories.map((category, index) => (
                    <Link key={index} href={`/category/${category.slug}`}>
                      <span className="md:float-right mt-2 align-middle text-orange ml-4 font-semibold cursor-pointer">
                        {category.name}
                      </span>
                    </Link>
                  ))}
                  <Link href="/about">
                    <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                      About
                    </a>
                  </Link>
                </li>
              </ul>
            </button>
          </div>
          <Link href="/">
            <img
              className="hover:cursor-pointer"
              width="200px"
              height="auto"
              src="https://i.ibb.co/n3cqR0X/Excelsior-Logo.png"
              alt="logo-1"
              border="0"
            />
          </Link>
          <Link href="/">
            <img
              className="hover:cursor-pointer"
              width="60px"
              height="auto"
              src="https://i.ibb.co/nrSwx8Y/Screenshot-2023-04-01-at-18-36-47-removebg-preview.png"
              alt="logo-1"
              border="0"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ml-100">
          <ul className="menu menu-horizontal px-1">
            <li style={{ color: '#153579' }}>
              <Link href="/">
                <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                  Home
                </a>
              </Link>
              <Link href="/category/mini-articles">
                <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                  Mini Articles
                </a>
              </Link>
              <Link href="/category/bbs-updates">
                <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                  BBS Updates
                </a>
              </Link>
              <Link href="/about">
                <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                  About
                </a>
              </Link>
              <Link href="/about">
                <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                  Our Podcast
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <br />
    </>
  );
};

export default Header;
