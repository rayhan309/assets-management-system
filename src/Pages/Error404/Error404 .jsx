import React from "react";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-slate-100 px-6">
      
      {/* 404 Heading */}
      <h1 className="text-8xl font-extrabold text-white mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Oops! Page Not Found</h2>
      
      {/* Description */}
      <p className="text-slate-400 mb-6 text-center max-w-lg">
        AssetVerse couldn’t find the page you’re looking for. Maybe it was moved, deleted, 
        or you entered an incorrect URL. Don’t worry — your assets are safe!
      </p>
      
      {/* Go Back Home Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors"
      >
        Go to Dashboard
      </Link>

      {/* Optional Illustration */}
      <div className="mt-12 w-full max-w-md">
        <div className="h-56 w-full bg-gradient-to-br from-slate-800 to-slate-500 rounded-2xl flex items-center justify-center text-slate-300 text-lg border border-slate-700/50">
          AssetVerse Illustration
        </div>
      </div>
      
      {/* Footer Note */}
      <p className="mt-6 text-xs text-slate-300 text-center max-w-sm">
        Need help? Contact your system administrator or reach out to AssetVerse support.
      </p>
    </div>
  );
};

export default Error404;
