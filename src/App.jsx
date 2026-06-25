import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import CaseStudy from './pages/CaseStudy';
import SimReach from './pages/SimReach';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/work/simreach" element={<SimReach />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
