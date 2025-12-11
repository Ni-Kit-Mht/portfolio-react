import NavbarResume from "./NavbarResume";

export default function HireMe() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarResume />

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Hire Me</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I'm a content creator, researcher, and communicator who simplifies
            complex information into clear, accurate, and engaging content.
          </p>
        </div>

        {/* PROFILE CARD */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/450197491_1872786509868290_8184005655006988889_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=g90rnFbKGJ0Q7kNvwHCF1mI&_nc_oc=AdkXmOlue0AzC_V1aUyRYsQcdfh8vYMBmnXSQcEitScCoE36GSBo8eVaigni057SVOffPS5L3762Lqkl82Ajc2nv&_nc_zt=23&_nc_ht=scontent.fktm21-1.fna&_nc_gid=KJv6PY1YDok4dAWBfa3h3A&oh=00_AfkaFRwDQuqmSKcOAkqjua46WHpqFnFpD51Mr8x90wtAHg&oe=693EEB0E"
                alt="Profile"
                className="w-40 h-40 object-cover rounded-full border shadow"
              />
            </div>

            {/* INFO */}
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Nikit Mehta</h2>
              <p className="text-gray-600 leading-relaxed">
                I specialize in researching government & non-government schemes,
                verifying facts, and creating simple Nepali/English explanations
                that help people understand opportunities clearly.
              </p>

              <div className="flex flex-wrap gap-3 text-sm">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Research</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Fact Checking</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Video Scripting</span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">Content Creation</span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">Editing (CapCut)</span>
              </div>
            </div>
          </div>
        </div>

        {/* WHY HIRE ME */}
        <div className="bg-gray-100 p-8 rounded-2xl mb-12 shadow-inner">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Why You Should Hire Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "I simplify complex policies & government programs.",
              "I verify every detail from official sources.",
              "I create engaging short/long-form content.",
              "I am disciplined, consistent, and reliable.",
              "I communicate extremely clearly in Nepali & English.",
              "I produce scripts, videos, designs, and research.",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow"
              >
                <span className="text-blue-600 text-xl">✔</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://ni-kit-mht.github.io/portfolio-react"
              target="_blank"
              className="block bg-white rounded-xl shadow hover:shadow-xl p-6 transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Portfolio Website
              </h3>
              <p className="text-gray-600 text-sm">
                My personal portfolio showcasing my resume, projects,
                achievements, and contact information.
              </p>
            </a>

            <a
              href="https://github.com/ni-kit-mht"
              target="_blank"
              className="block bg-white rounded-xl shadow hover:shadow-xl p-6 transition"
            >
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                GitHub Projects
              </h3>
              <p className="text-gray-600 text-sm">
                Explore my academic, research, and personal coding projects.
              </p>
            </a>
          </div>
        </div>

        <div>
        {/* Links Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Find My Projects Online
        </h2>
        <a 
            href="https://medium.com/@nikitmht"
            target="_blank"
            className="m-2 block bg-white rounded-xl shadow hover:shadow-xl p-6 transition"
        >
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li className="hover:underline">Medium Articles</li>
            </ul>
        </a>

        <a 
            href="https://www.youtube.com/@anstationery6759"
            target="_blank"
            className="m-2 block bg-white rounded-xl shadow hover:shadow-xl p-6 transition"
        >
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li className="hover:underline">Youtube</li>
            </ul>
        </a>

        </div>

        {/* CONTACT CARD */}
        <div className="bg-blue-600 text-white rounded-2xl p-10 shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="mb-6 text-lg opacity-90">
            I am available for full-time hybrid roles and freelance content creation.
          </p>

          <div className="space-y-2">
            <p className="text-lg">
              📞 <strong>9741813742</strong>
            </p>
            <p className="text-lg">
              📧{" "}
              <a
                href="mailto:anstationery1@gmail.com"
                className="underline text-white hover:text-gray-200"
              >
                anstationery1@gmail.com
              </a>
            </p>
          </div>

          <a
            href="/portfolio-react/resume_content_writer.pdf"
            download
            className="mt-6 inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
