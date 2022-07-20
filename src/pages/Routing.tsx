import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About/About';
import Details from './Details/Details';
import GalleryPage from './GalleryPage/GalleryPage';
import NotFound from './NotFound/NotFound';

const Routing: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routing;
