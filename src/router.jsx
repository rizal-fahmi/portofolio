import { createBrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Education from './pages/Education.jsx';
import Skills from './pages/Skills.jsx';
import Interests from './pages/Interest.jsx';
import Awards from './pages/Awards.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
      {
        path: '/education',
        element: <Education />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/interests',
        element: <Interests />,
      },
      {
        path: '/awards',
        element: <Awards />,
      },
    ],
  },
]);

export default router;
