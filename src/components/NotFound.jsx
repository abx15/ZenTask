import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center px-6 h-screen text-center">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white">404</h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
        Page Not Found
      </p>

      <Link
        to="/"
        className="px-6 py-3 mt-6 text-white bg-orange-500 rounded-lg transition hover:bg-orange-600"
      >
        Go Home
      </Link>
    </div>
  );
}
