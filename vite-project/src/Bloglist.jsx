const Bloglist = ({blogs, title}) => {
    // const { blogs } = props;
    // const title = props.title;
    return (
        <div className="flex flex-col items-center gap-2 mt-2">
            <h2 className="text-2xl text-purple-800 text-shadow-purple-800 mb-2">{title}</h2>
            {blogs.map((blog) => (
                <div key={blog.id} className="bg-white border-2 border-gray-300 p-4 rounded-lg  w-150 max-w-md hover:shadow-lg transition-shadow duration-300 mt-2.5">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h3>
                    <p className="text-gray-600 mb-4">{blog.body}</p>
                    <p className="text-sm text-gray-500">Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Bloglist;