import { Link } from "react-router-dom";

const Bloglist = ({blogs, title, handleDelete}) => {
    // const { blogs } = props;
    // const title = props.title;
    
    return (
        <div className="mt-8 mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b border-gray-200 pb-4 inline-block">{title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <div key={blog.id} className="glass-card flex flex-col justify-between overflow-hidden rounded-3xl">
                        {blog.photo && (
                            <img src={blog.photo} alt={blog.title} className="w-full h-48 object-cover" />
                        )}
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                                    {blog.author.name.charAt(0)}
                                </div>
                                <Link to={`/bloglist/${blog.id}`}>
                                <div>
                                    <p className="text-sm font-semibold text-slate-700">{blog.author.name}</p>
                                    <p className="text-xs text-slate-500">{blog.author.occupation}</p>
                                </div>
                                    </Link>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">{blog.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">{blog.body}</p>
                            <button 
                                className="w-full bg-red-50 text-red-600 border border-red-100 py-2.5 px-4 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 font-medium" 
                                onClick={() => handleDelete(blog.id)}
                            >
                                Delete Blog
                            </button>
                              
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bloglist;