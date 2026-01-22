import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { About } from './components/pages/About/About';
import { Page404 } from './components/pages/Page404/Page404';
import { Header } from './components/Header/Header';
import { ScrollToHash } from './components/pages/ScrollToHash';

function App() {

  return (
    <Router>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
