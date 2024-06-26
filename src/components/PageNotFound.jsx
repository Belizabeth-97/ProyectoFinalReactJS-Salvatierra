import React from 'react';

const NotFoundPage = () => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            <span className="sr-only">Error</span>
            404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Lo sentimos, no pudimos encontrar esta página.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra página de inicio.
          </p>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 font-semibold rounded"
          >
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;