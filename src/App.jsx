// App.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TfiCheckBox } from "react-icons/tfi";
import { FaQuestionCircle } from "react-icons/fa"; // you can change icon set
import bgImage from './assets/portfolio-bg.jpeg';
import "./App.css"
import Footer from "./Footer";
import Navbar from "./Navbar";
import { SiGmail, SiViber, SiWhatsapp, SiX } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { SiTwitch } from "react-icons/si";

motion;
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
};

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const qaData = [
    { question: "What is your name?", answer: "My name is Nikit Mehta." },
    { question: "What is your nickname?", answer: "My nickname is nikitmht." },
    { question: "Where are you from?", answer: "I am from Lohajara, Tirhut-5, Madhesh Pradesh, Nepal." },
    { question: "Where do you live?", answer: "I live in Imadol, Mahalaxmi-4, Lalitpur, Bagmati Pradesh, Nepal." },
    { question: "When were you born?", answer: "I was born on 19th October, 2000." },
    { question: "What are your hobbies?", answer: "I like singing, games, using computer." },
    { question: "What is your occupation?", answer: "I am currently a student." },
    { question: "Where do you study?", answer: "I study in IOE, Thapathali Campus, Thapathali, Kathmandu, Nepal." },
    { question: "What is your field of study?", answer: "I am studying Bachelor in Electronics, Communication and Information Engineering." },
    { question: "What is your aim?", answer: "My aim is to be a responsible, honest and successful Engineer." },
    { question: "What is your favourite food?", answer: "I like rice and chicken curry." },
    { question: "What are your interests?", answer: "I like to do business and make web applications, websites." },
  ];

  return (
      <div
        className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6 sm:p-10 flex items-center justify-center overflow-x-hidden min-w-[280px]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: 'black',
          backgroundBlend: 'multiply',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{}} 
            className="portfolio-container bg-white dark:bg-gray-900 dark:text-white rounded-3xl shadow-2xl p-8 sm:p-12 max-w-4xl w-full min-w-[320px]"
          >
          <Navbar />
          <section id="home" className="mb-10 min-h-auto p-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-4 ">
                In this website you can switch between you can learn about me in your prefered darkmode or lightmode.
              </p>
              {/* Dark Mode Toggle */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-300 text-white dark:text-gray-900 transition"
                >
                  {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
              </div>
              <p className="text-lg mb-4 ">
                If you find this website apealing, be sure to follow my socials. I have more fun and exiting projects like this comming for you.
              </p>    
            </div>
          </section>

          <h1 id = "portfolio" className="text-[clamp(1.5rem,5vw,2.5rem)] text-center font-extrabold text-indigo-700 dark:text-indigo-300 mb-[clamp(0.5rem,3vw,2rem)] tracking-tight">
            Portfolio
          </h1>

          {/* main */}
          <div className="grid gap-6 md:grid-cols-2 p-4 sm:p-5 mb-10 text-[clamp(0.875rem,2.5vw,1rem)]">
            {qaData.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-indigo-50 dark:bg-gray-800 border border-indigo-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300 text-[clamp(0.875rem,2.5vw,1.125rem)]"
              >
                <p className="text-indigo-600 dark:text-indigo-300 font-semibold mb-2 flex items-center gap-2">
                  <TfiCheckBox className="text-indigo-400 dark:text-indigo-200" />
                  {item.question}
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
          <section id = "about" className="mb-20 min-h-100 p-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
            <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] text-center font-extrabold text-indigo-700 dark:text-indigo-300 mb-[clamp(0.5rem,3vw,2rem)] tracking-tight">About</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-4">
                Hello! I'm Nikit, a passionate front-end developer based in Lalitpur, Nepal. I specialize in building responsive, accessible, and fast web applications using modern JavaScript frameworks.
              </p>
              <p className="mb-4">
                I started my journey as a self-taught developer, diving into HTML and CSS back in high school. Over the years, I've grown into technologies like React, Firebase, and Tailwind CSS. I'm currently exploring Next.js and AI integration in web apps.
              </p>
              <p className="mb-4">
                When I'm not coding, you'll find me sketching UI ideas, reading tech blogs, or in my stationery retail shop. I'm always eager to learn new things and collaborate with others to bring creative ideas to life.
              </p>
              <p className="mb-4">
                Feel free to <a href="#contact" className="text-blue-500 underline">get in touch</a> or check out my <a href="/portfolio-react/resume_complete.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">resume</a>.
              </p>
            </div>
          </section>

          <section id="projects" className="mb-20 min-h-100 p-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
            <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] text-center font-extrabold text-indigo-700 dark:text-indigo-300 mb-[clamp(0.5rem,3vw,2rem)] tracking-tight">
              Projects
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-4">
                I build my own projects.
              </p>
              <p className="text-lg mb-8">
                Among various projects I have built, the most notable ones are listed below:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 dark:border-gray-600 text-left text-sm">
                  <thead className="bg-indigo-200 dark:bg-indigo-700">
                    <tr>
                      <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">Project</th>
                      <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900">
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600 font-medium">Connect 4 Game</td>
                      <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">A React + TypeScript implementation of the classic Connect 4 game with an 8x8 board and turn-based logic.</td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600 font-medium">Chess Game with AI</td>
                      <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">A chess game UI to play against any chess engine by running the chess engine locally.</td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600 font-medium">AI Song Guesser</td>
                      <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">Backend service using Python and ACRCloud API to identify songs from audio clips and display results in a web interface.</td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600 font-medium">Font Identifier</td>
                      <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">A Flask app that uses AI to detect fonts from PDF and images, helpful for designers and typographers.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>


<section id="skills" className="mb-20 min-h-100 p-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
  <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] text-center font-extrabold text-indigo-700 dark:text-indigo-300 mb-[clamp(0.5rem,3vw,2rem)] tracking-tight">
    Skills
  </h2>
  <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
    {/* Frontend */}
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Frontend</h3>
      <ul className="text-sm space-y-1 list-disc list-inside">
        <li>HTML CSS </li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React, Next.js</li>
        <li>Tailwind CSS</li>
        <li>Responsive</li>
      </ul>
    </div>

    {/* Backend */}
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Backend</h3>
      <ul className="text-sm space-y-1 list-disc list-inside">
  <li>REST API</li>
  <li>Django</li>
  <li>Firebase</li>
  <li>PostgreSQL</li>
</ul>

    </div>

    {/* DevOps */}
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">DevOps & Tools</h3>

<ul className="text-sm space-y-1 list-disc list-inside">
  <li>GitHub</li>
  <li>CI (Vercel)</li>
  <li>Docker</li>
  <li>Linux</li>
</ul>

    </div>

    {/* Design */}
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">UI/UX & Design</h3>

<ul className="text-sm space-y-1 list-disc list-inside">
  <li>Figma</li>
  <li>Color Theory</li>
  <li>Typography</li>
  <li>Accessibility</li>
  <li>Motion UI</li>
</ul>

    </div>
  </div>
</section>



          <section id = "contact" className="mb-20 min-h-100 p-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
            <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] text-center font-extrabold text-indigo-700 dark:text-indigo-300 mb-[clamp(0.5rem,3vw,2rem)] tracking-tight">Contact</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-4">
                I am always active on my cell phone. You can call me directly dialing my number: +977 9741813742.
              </p>
              <p className="text-lg mb-4">
                I use viber, whatsapp on same number.
              </p>
              <p className="text-lg mb-4">
                My Email Address: nikitmht@gmail.com.
              </p>
              <p className="text-lg mb-4">
                You can find me on Facebook, Instagram, YouTube, Twitch, GitHub, LinkedIn, and X.
              </p>

<p className="text-lg mb-4 font-semibold">Quick Links</p>

<div className="overflow-x-auto">
  <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
    <thead>
      <tr className="bg-gray-200 dark:bg-gray-700">
        <th className="px-4 py-2 text-left text-gray-800 dark:text-white">Platform</th>
        <th className="px-4 py-2 text-left text-gray-800 dark:text-white">Link</th>
        <th className="px-4 py-2 text-left text-gray-800 dark:text-white">Icons</th>
      </tr>
    </thead>
    <tbody className="text-gray-700 dark:text-gray-300">
      {[
        { name: "Facebook", url: "https://www.facebook.com/nikit.mehta.182", icon: <FaFacebook></FaFacebook> },
        { name: "Instagram", url: "https://www.instagram.com/nikitmht2/" , icon:<SiInstagram></SiInstagram>},
        { name: "YouTube", url: "https://youtube.com/@nikitmehta7112" , icon:<SiYoutube></SiYoutube>},
        { name: "Twitch", url: "https://www.twitch.tv/smallgamedeveloper" , icon:<SiTwitch></SiTwitch>},
        { name: "GitHub", url: "https://github.com/Ni-Kit-Mht" , icon: <SiGithub></SiGithub>},
        { name: "LinkedIn", url: "https://linkedin.com/in/nikit-mehta-981613309/" , icon:<SiLinkedin></SiLinkedin>},
        { name: "X (Twitter)", url: "https://x.com/Nikit23451551" , icon:<SiX></SiX>},
        { name: "Viber", url: "viber://chat?number=%2B9741813742", icon: <SiViber /> },
        { name: "WhatsApp", url: "https://wa.me/9741813742", icon: <SiWhatsapp /> },
        { name: "Gmail", url: "mailto:nikitmht@gmail.com", icon: <SiGmail /> },
      ].map((social) => (
        <tr key={social.name} className="hover:bg-gray-100 dark:hover:bg-gray-800">
          <td className="px-4 py-2 font-medium">{social.name}</td>
          <td className="px-4 py-2 text-blue-600 dark:text-blue-400">
            <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {social.url}
            </a>
          </td>
          <td className="px-4 py-2">{social.icon}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            </div>
          </section>

          
          {/* Footer */}
          <Footer />
</motion.div>
      </div>
  );
}

export default App;
