import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PlaceholderPage from './pages/PlaceholderPage';

const placeholderPages = [
  { path: 'about', eyebrow: 'About', title: 'About <span class="green">FirstData</span>', description: 'Placeholder page for the next conversion step.' },
  { path: 'platform', eyebrow: 'Platform', title: 'Tokenization <span class="green">Platform</span>', description: 'Placeholder page for the next conversion step.' },
  { path: 'solutions', eyebrow: 'Solutions', title: 'Asset ownership <span class="green">solutions</span>', description: 'Placeholder page for the next conversion step.' },
  { path: 'investors', eyebrow: 'Investors', title: 'For <span class="green">Investors</span>', description: 'Placeholder page for the next conversion step.' },
  { path: 'owners', eyebrow: 'Owners', title: 'For Asset <span class="green">Owners</span>', description: 'Placeholder page for the next conversion step.' },
  { path: 'partners', eyebrow: 'Partners', title: 'For <span class="green">Partners</span>', description: 'Placeholder page for the next conversion step.' },
  { path: 'trust', eyebrow: 'Trust & Compliance', title: 'Built for <span class="green">regulated markets</span>', description: 'Placeholder page for the next conversion step.' },
  { path: 'vision', eyebrow: 'Vision 2030', title: 'Aligned with <span class="green">Saudi Vision 2030</span>', description: 'Placeholder page for the next conversion step.' },
  { path: 'contact', eyebrow: 'Contact', title: 'Talk to <span class="green">FirstData</span>', description: 'Placeholder page for the next conversion step.' },
];

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        {placeholderPages.map((page) => (
          <Route key={page.path} path={page.path} element={<PlaceholderPage eyebrow={page.eyebrow} title={page.title} description={page.description} />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
