// root.route.ts
import RootLayoutDashboard from "@/components/layout/RootLayoutDashboard";
import { createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { rootRoute } from "./_root";

const Index = lazy(() => import('@/pages/(root)/Index'));
const Repository = lazy(() => import('@/pages/(root)/Repository'));

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

export const customerRoutes = [
  indexRoute,
  repositoryRoute,
];
