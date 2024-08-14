import { Outlet } from '@remix-run/react';

export default function Posts() {
  return (
    <>
      <h1 className="font-mono text-xl font-semibold text-gray-700">
        Posts Pages
      </h1>
      <Outlet />
    </>
  );
}
