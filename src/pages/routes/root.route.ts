// root.route.ts
import RootLayoutDashboard from "@/components/layout/RootLayoutDashboard";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { rootRoute } from "./_root";

const Index = lazy(() => import('@/pages/(root)/Index'));
const Repository = lazy(() => import('@/pages/(root)/Repository'));
const Projects = lazy(() => import('@/pages/(root)/Projects'));
const Packages = lazy(() => import('@/pages/routes/Packages'));

// Parent FIRST
export const dashboardLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "dashboard",
  component: RootLayoutDashboard,
});

// Children AFTER
export const indexRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/',
  component: Index,
});

export const repositoryRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/repositories',
  component: Repository,
});

export const projectRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/projects',
  component: Projects,
});

export const packagesRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/Packages',
  component: Packages,
});



export const customerRoutes = [
  indexRoute,
  repositoryRoute,
  projectRoute,
  packagesRoute
];
