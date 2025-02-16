import React from 'react';

function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold">404 Not Found</h1>
      <p className="text-gray-500 mt-2">Sorry, the page you're looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
