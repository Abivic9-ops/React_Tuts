const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <div className="glass-card p-10 rounded-3xl shadow-lg bg-white/40 backdrop-blur-md border border-white/20">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
          About Us
        </h2>
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            Welcome to our blog! We are a passionate community of writers and developers dedicated to sharing insights, stories, and expertise. Our mission is to inspire, educate, and spark meaningful conversations through our carefully curated content.
          </p>
          <p>
            Whether you're looking for the latest tech trends, in-depth tutorials, or just a good read, you've come to the right place. We believe that knowledge grows when shared, and we're thrilled to have you join us on this journey.
          </p>
          <p>
            Stay curious and keep exploring!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
