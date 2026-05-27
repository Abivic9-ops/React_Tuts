import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    return (
        <div className="w-full max-w-7xl mx-auto mt-10">
            <h2 className="text-3xl font-bold text-center">Blog Details-{id}</h2>
        </div>
    );
}   

export default BlogDetails;