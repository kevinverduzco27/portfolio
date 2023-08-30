import React from 'react';
import './Header.css';

function Header({ pages, currentPage, setCurrentPage }) {
  return (
    <header>
      <img className="logo" src='../assets/KV.png' alt="kv logo" />
      <nav>
        <ul>
          {pages.map((page) => (
            <li key={page}>
              <button
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? 'active' : ''}
              >
                {page.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
