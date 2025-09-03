import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/admin/admin-layout.tsx", [
        route('dashboard', 'routes/admin/dashboard.tsx'),
        route('all-users', 'routes/admin/all-users.tsx'),
        // Changed the absolute path to a relative one
        route('trips', 'routes/admin/trips.tsx'), 
    ]),
] satisfies RouteConfig;