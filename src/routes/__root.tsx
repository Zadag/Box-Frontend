import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import "../index.css";

const RootLayout = () => (
  <>
    <div>
      <Link to="/">Home</Link> <Link to="/about">About</Link>
    </div>
    <hr />
    <Outlet />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
