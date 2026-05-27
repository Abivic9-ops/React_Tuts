import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="glass-card p-10 rounded-3xl shadow-lg bg-white/40 backdrop-blur-md border border-white/20 max-w-lg mx-auto text-center">
            <h1 className="text-5xl font-extrabold text-slate-800 mb-4">404</h1>
            <p className="text-xl text-slate-600 mb-4">Sorry, Page Not Found</p>
            <p className="text-slate-600 mb-6">The page you are looking for does not exist.</p>
            <Link to="/" className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg font-bold">
                Back to Home
            </Link>
        </div>
    );
}

export default NotFound;  