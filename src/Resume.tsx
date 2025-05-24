import NavbarResume from "./NavbarResume";

function Resume() {
  return (
    <div>

    <NavbarResume />
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>
<iframe
  src="/portfolio-react/resume_complete.pdf"
  className="min-w-[360px] w-full h-[80vh] border"
  title="Resume Preview"
/>


      <div className="mt-4">
        <a
          href="/portfolio-react/resume_complete.pdf"
          download
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Download PDF (Resume)
        </a>
      </div>
<br>
</br>
<br>
</br>

<br>
</br>

<h1 className="text-3xl font-bold mb-4">Additional Resume from my Past</h1>
<iframe
  src="/portfolio-react/resume_combined.pdf"
  className="min-w-[360px] w-full h-[80vh] border"
  title="Resume Preview"
/>


    </div>
    </div>
  );
}

export default Resume;
