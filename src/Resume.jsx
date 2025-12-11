import { Link } from "react-router-dom";
import NavbarResume from "./NavbarResume";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarResume />

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          My Resume
        </h1>

        {/* MAIN RESUME SECTION */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Featured Resume
          </h2>

          <iframe
            src="/portfolio-react/resume_content_writer.pdf"
            className="w-full h-[80vh] rounded border"
            title="Resume Preview"
          />

          <div className="mt-4 flex justify-end">
            <a
              href="/portfolio-react/resume_content_writer.pdf"
              download
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* SPACING */}
        <div className="my-12" />

        {/* PAST RESUMES */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Additional Resumes From My Past
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Resume - Complete</h3>
            <iframe
              src="/portfolio-react/resume_complete.pdf"
              className="w-full h-[70vh] rounded border"
              title="Resume Complete"
            />
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Resume - Combined</h3>
            <iframe
              src="/portfolio-react/resume_combined.pdf"
              className="w-full h-[70vh] rounded border"
              title="Resume Combined"
            />
          </div>

        </div>

        {/* PROJECT SECTION */}
        <div className="my-16" />

        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* PROJECT 1 */}
          <Link
            to="/portfolio-react/hire_me"
            className="block bg-white rounded-xl shadow hover:shadow-lg p-6 transition"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Hire Me Page
            </h3>
            <p className="text-gray-600 text-sm">
              Would you like to hire me? Check out my Hire Me page showcasing my skills, services, and contact information.
            </p>
          </Link>

          {/* Add your other projects here later */}
        </div>

      </div>
    </div>
  );
}
