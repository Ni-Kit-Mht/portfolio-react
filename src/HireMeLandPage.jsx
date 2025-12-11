import { Link } from 'react-router-dom';
import NavbarResume from './NavbarResume';

export default function HireMeLandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarResume />

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Hire Me</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose how you'd like to work with me — content writing & research,
            or frontend development and UI implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Content Writer & Researcher</h2>
              <p className="text-gray-600 mb-4">
                I research government and non-government schemes, verify facts,
                and create clear Nepali/English content, video scripts, and social
                posts that help people access opportunities.
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Policy & scheme research and verification</li>
                <li>Script writing, short-video content, and infographics</li>
                <li>Community engagement and content strategy</li>
              </ul>
            </div>

            <div className="mt-6 text-right">
              <Link to="/portfolio-react/hire_me/writer" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                Hire as Content Writer
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Frontend Developer</h2>
              <p className="text-gray-600 mb-4">
                I build responsive, accessible, and performant user interfaces
                using React, Tailwind, and modern tooling. I deliver pixel-accurate
                components and production-ready frontend experiences.
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>React, Vite, TypeScript (optional)</li>
                <li>Responsive & accessible UI implementation</li>
                <li>Performance tuning and component-driven design</li>
              </ul>
            </div>

            <div className="mt-6 text-right">
              <a href="/portfolio-react/resume_frontend_general.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition">
                Hire as Frontend Developer
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500">
          <small>Prefer another arrangement? Contact me at <a href="mailto:anstationery1@gmail.com" className="underline text-gray-700">anstationery1@gmail.com</a></small>
        </div>
      </div>
    </div>
  );
}
