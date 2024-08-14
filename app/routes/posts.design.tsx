import { Outlet } from '@remix-run/react';

export default function PostsDesign() {
  return (
    <>
      <h1 className="font-mono text-xl font-semibold text-gray-700">
        Posts Design Pages
      </h1>
      <Outlet />
    </>
  );
}
