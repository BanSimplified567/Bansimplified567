import { RouterProvider, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { routeTree } from './routes/_root';
import TanstackProvider from './contexts/TanstackProvider';
import "./index.css";

const router = createRouter({ routeTree: routeTree });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanstackProvider>
      <RouterProvider router={ router } />
      <TanStackRouterDevtools router={ router } />
    </TanstackProvider>
  </StrictMode>
);
