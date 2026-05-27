const Contact = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <div className="glass-card p-10 rounded-3xl shadow-lg bg-white/40 backdrop-blur-md border border-white/20">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
          Contact Us
        </h2>
        <p className="text-lg text-slate-700 mb-8">
          Have a question or want to get in touch? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>
        
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 font-semibold ml-1">Name</label>
              <input 
                type="text" 
                className="w-full px-5 py-3.5 rounded-2xl border border-white/40 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 font-semibold ml-1">Email</label>
              <input 
                type="email" 
                className="w-full px-5 py-3.5 rounded-2xl border border-white/40 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-700 font-semibold ml-1">Message</label>
            <textarea 
              className="w-full px-5 py-3.5 rounded-2xl border border-white/40 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm h-40 resize-none"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 self-start font-bold mt-2"
            onClick={(e) => e.preventDefault()}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
