import './App.scss';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Aside from './components/Aside.js';
import Main from './components/Main.js';
;
function App() {
  return (
<div className="page-wrap">
  <header className="page-header">
    <Header />
  </header>
  <nav className="page-nav">
    <Nav />
  </nav>
  <main className="page-main">
    <Main />
  </main>
  <aside className="page-sidebar">
    <Aside />
  </aside>
  <footer className="page-footer">
    <Footer />
  </footer>
</div>

  );
}

export default App;
