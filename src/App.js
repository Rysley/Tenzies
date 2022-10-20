import React from 'react';
import Header from './components/Header.js';
import List from './components/List.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
    <div className="page_wrapper">
      <Header />
      <List />
      <Footer />
    </div>
  );
}
