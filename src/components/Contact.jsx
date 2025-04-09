const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="rounded-lg bg-black py-24 text-blue-50 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Contact Us</h2>

        <div className="flex flex-col items-center gap-6">
          <a
            href="https://www.linkedin.com/school/velammal-college-of-engineering-&-technology-madurai/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition duration-300"
          >
            Visit our LinkedIn Page
          </a>

          <a
            href="mailto:krs@vcet.ac.in"
            className="bg-blue-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg transition duration-300"
          >
            Mail Coordinator
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
