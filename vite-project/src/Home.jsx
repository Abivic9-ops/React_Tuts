import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';
import  useFetch  from './usefetch'


const Home = () => {
    const { data: blogs, isPending, error, setData: setBlogs } = useFetch('http://localhost:8000/api/posts');
        
    // let name = 'mario';
    // const [name, setName] = useState('Mario');
    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //     // alert('Button clicked!');
    //     // console.log('Hello ninjas', e.target);
    //     // name = 'luigi';
    //     // console.log(name);
    //     setName('Victor');
    //     setAge(30);
    // }
    // const [name, setName] = useState('mario');
  
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    // useEffect(() => {
    //     // Fetch data from our backend server

    //         fetch('http://localhost:8000/api/posts')
    //             .then(res => {
    //                 if (!res.ok) {
    //                     throw Error('Could not fetch the data for that resource');
    //                 }
    //                 return res.json();
    //             })
    //             .then(data => {
    //                 setBlogs(data);
    //                 setIsPending(false);
    //                 setError(null);
    //             })
    //             .catch(err => {
    //                 setIsPending(false);
    //                 setError(err.message);
    //     });
    // }, []);
      
    return (
        <div className="w-full">
            {/* Header section with optional sleek typography if wanted, but Bloglist already has a title */}

            {/* Conditional loading and error messages */}
            {error && (
                <div className="glass-card p-6 text-red-500 text-center max-w-lg mx-auto mt-10">
                    <span className="font-bold">Error:</span> {error}
                </div>
            )}

            {isPending && (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
                </div>
            )}

            {/* Only render Bloglist when blogs data is available */}
            <div className="flex flex-col gap-8">
                {blogs && <Bloglist blogs={blogs} title="All Publications" handleDelete={handleDelete} />}
                {blogs && <Bloglist blogs={blogs.filter((blog) => blog.author.name === 'John Mwangi')} title="John's Masterpieces" />}
            </div>
        </div>
    );
}

export default Home;
