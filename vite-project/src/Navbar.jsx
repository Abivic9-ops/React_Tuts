import { Link } from 'react-router-dom';



const  Navbar = () => {
    return (  
        <nav className="glass-panel sticky top-0 z-50 px-8 py-5 flex items-center justify-between mx-auto max-w-7xl mt-4 rounded-3xl">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent tracking-tight">Dojo Blog</h1>
            <div className="flex gap-8 items-center font-medium">
                <Link to="/" className="text-slate-600 hover:text-emerald-600 transition-colors duration-200">Home</Link>
                <Link to="/create" className="text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">New Blog</Link>
                <Link to="/about" className="text-slate-600 hover:text-emerald-600 transition-colors duration-200">About</Link>
                <Link to="/contact" className="text-slate-600 hover:text-emerald-600 transition-colors duration-200">Contact</Link>
            </div>
        </nav>
    );
}
 
export default  Navbar;