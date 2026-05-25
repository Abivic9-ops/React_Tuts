const  Navbar = () => {
    return (  
        <nav className="p-5 bg-gray-800 text-white flex align-center border-b-2 border-gray-500 justify-around">
            <h1 className="text-2xl font-bold text-pink-600">Dojo Blog</h1>
            <div className="flex gap-6">
                <a href="/" className="hover:underline">Home</a>
                <a href="/create" className="hover:underline">New Blog</a>
                <a href="/about" className="hover:underline">about</a>
                <a href="/contact" className="hover:underline">contact</a>
            </div>
        </nav>
    );
}
 
export default  Navbar;