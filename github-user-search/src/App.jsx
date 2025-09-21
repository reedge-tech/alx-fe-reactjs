import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './components/Search';
import './App.css';

export default function App() {
  return (
    <Router>
      <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
        <header>
          <h1>GitHub User Search</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>
        <main style={{ marginTop: 20 }}>
          <Routes>
            <Route path="/" element={<Search />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
