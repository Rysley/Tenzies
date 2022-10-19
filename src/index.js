import React from 'react';
import ReactDom from 'react-dom';

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={require('./img/logo.svg')} className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

const List = () => (
  <div>
    <h1>Thing Title</h1>
    <h3>Thing Subtitle</h3>
    <ul>
      <li>Thing 1</li>
      <li>Thing 2</li>
      <li>Thing 3</li>
      <li>Thing 4</li>
    </ul>
  </div>
);

const Footer = () => (
  <footer>
    <small>(c) 2022 RxLx developement. All Right Reserved.</small>
  </footer>
);

const Page = () => (
  <div className="page_wrapper">
    <Header />
    <List />
    <Footer />
  </div>
);

ReactDom.render(<Page />, document.getElementById('root'));
