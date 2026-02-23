import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 font-display">
            <h1 className="text-9xl font-black text-slate-200 dark:text-slate-800 mb-4 tracking-tighter">
                404
            </h1>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Page Not Found
            </h2>
            <p className="text-slate-500 text-center max-w-md mb-8">
                Oops! The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="flex items-center gap-2 px-6 py-3 bg-[#113cbb] text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
            >
                <Home size={20} />
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
