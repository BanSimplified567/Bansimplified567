// _root.tsx
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { customerRoutes, dashboardLayoutRoute } from "./root.route";

function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center text-sm text-gray-500">
      404 — Page Not Found
    </div>
  );
}

export const rootRoute = createRootRoute({
  component: Outlet,
  notFoundComponent: NotFound,
});

// ✅ Correct hierarchy attachment
export const routeTree = rootRoute.addChildren([
  dashboardLayoutRoute.addChildren(customerRoutes),
]);
