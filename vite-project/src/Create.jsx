import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [authorName, setAuthorName] = useState('John Mwangi');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Creating a mock author object to match the db.json structure
    const authorObj = {
      name: authorName,
      age: 30,
      occupation: "Content Creator",
      work: "Writes amazing articles for the blog.",
      maritalStatus: "Single"
    };

    const blog = { title, body, author: authorObj, photo: "https://picsum.photos/id/1018/600/400" };

    setIsPending(true);

    fetch('http://localhost:8000/api/posts', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      navigate('/');
    });
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      <div className="glass-card p-10 rounded-3xl shadow-lg bg-white/40 backdrop-blur-md border border-white/20">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
          Create a New Blog
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-slate-700 font-semibold ml-1">Blog Title:</label>
            <input 
              type="text" 
              required 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-5 py-3.5 rounded-2xl border border-white/40 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
              placeholder="Enter a catchy title..."
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-700 font-semibold ml-1">Blog Body:</label>
            <textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full px-5 py-3.5 rounded-2xl border border-white/40 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm h-40 resize-none"
              placeholder="Write your masterpiece here..."
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-700 font-semibold ml-1">Blog Author:</label>
            <select
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full px-5 py-3.5 rounded-2xl border border-white/40 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
            >
              <option value="John Mwangi">John Mwangi</option>
              <option value="Sarah Atieno">Sarah Atieno</option>
              <option value="Kevin Otieno">Kevin Otieno</option>
              <option value="Mark Kamau">Mark Kamau</option>
            </select>
          </div>
          
          <div className="mt-4 flex justify-center">
            { !isPending && 
              <button className="text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-10 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-bold w-full md:w-auto">
                Add Blog
              </button>
            }
            { isPending && 
              <button disabled className="text-white bg-slate-400 px-10 py-3.5 rounded-full transition-all shadow-md font-bold w-full md:w-auto cursor-not-allowed">
                Adding Blog...
              </button>
            }
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;