import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <footer
    className="footer bg-base-200 text-base-content"
    style={{ color: 'white', backgroundColor: '#ebe4d2' }}
  >
    <div className="justify-self-center">
      <Link href="/">
        {/* <span className="logo cursor-pointer font-bold text-4xl text-orange">Prodat ⭐️</span> */}
        <img
          width="200px"
          height="auto"
          src="https://i.ibb.co/n3cqR0X/Excelsior-Logo.png"
          alt="logo-1"
          border="0"
        />
      </Link>
    </div>
    <div className="justify-self-center" style={{ color: '#153579' }}>
      <a href="https://www.instagram.com/excelsiormagz/">CONTACT</a>
      <div className="grid grid-flow-col gap-4">
        <a href="https://www.instagram.com/excelsiormagz/">
          <img
            src="https://i.ibb.co/d2vBPhL/1.png"
            alt=""
            style={{ width: '20px', height: 'auto' }}
          />
        </a>
        <a href="mailto:excelsiormagsmailbox@gmail.com">
          <img
            src="https://i.ibb.co/ChdTZp1/5.png"
            alt=""
            style={{ width: '20px', height: 'auto' }}
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
