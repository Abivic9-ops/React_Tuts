import { useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/api/posts/' + id)    

    return (
        <div className="w-full max-w-7xl mx-auto mt-10">
            {isPending && <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
            </div>}
            {error && <div className="glass-card p-6 text-red-500 text-center max-w-lg mx-auto mt-10">
                <span className="font-bold">Error:</span> {error}
            </div>} 
            {blog && (
                <article className="glass-card rounded-3xl shadow-lg bg-white/40 backdrop-blur-md border border-white/20 overflow-hidden">
                    {blog.photo && (
                        <img src={blog.photo} alt={blog.title} className="w-full h-72 object-cover" />
                    )}
                    <div className="p-8">
                        <h2 className="text-3xl font-extrabold text-slate-800 mb-4">{blog.title}</h2>
                        <p className="text-slate-500 mb-6 font-medium">Written by {blog.author.name} · {blog.author.occupation}</p>
                        <div className="text-slate-700 leading-relaxed">
                            <p>{blog.body}</p>
                        </div>
                    </div>
                </article>
            )}  
        </div>
    );  
}   

export default BlogDetails;