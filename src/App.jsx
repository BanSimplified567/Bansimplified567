import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/Pages/About/About';
import Activities from './components/Pages/Activities/Activities';
import Blog from './components/Pages/Blog/Blog';
import Contact from './components/Pages/Contact/Contact';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Pages/Navbar';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Skills from './components/Pages/Skills/Skills';

const routes = [
   { path: '/', element: <Home /> },
   { path: '/skills', element: <Skills /> },
   { path: '/about', element: <About /> },
   { path: '/blog', element: <Blog /> },
   { path: '/contact', element: <Contact /> },
   { path: '/activities', element: <Activities /> },
   { path: '/portfolio', element: <Portfolio /> },
];

const router = createBrowserRouter([
   {
      element: (
         <header className="section">
            <Navbar />
            <main className="appMain">
               <Outlet />
            </main>
         </header>
      ),
      children: routes.map(({ path, element }) => ({
         path,
         element,
      })),
   },
]);

function App() {
   return <RouterProvider router={router}></RouterProvider>;
}

export default App;
