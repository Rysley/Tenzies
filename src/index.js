import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header.js';
import List from './List.js';
import Footer from './Footer.js';

const App = () => (
  <div className="page_wrapper">
    <Header />
    <List />
    <Footer />
  </div>
);

ReactDom.render(<App />, document.getElementById('root'));
