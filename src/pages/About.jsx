import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import IconContainer from '../components/IconContainer';

const About = () => {
  const skills = [
    { name: 'HTML', icon: 'bx bxl-html5' },
    { name: 'CSS', icon: 'bx bxl-css3' },
    { name: 'JavaScript', icon: 'bx bxl-javascript' },
    { name: 'Python', icon: 'bx bxl-python' },
    { name: 'React', icon: 'bx bxl-react' },
    { name: 'Node.js', icon: 'bx bxl-nodejs' },
    { name: 'MongoDB', icon: 'bx bxs-data' },
    { name: 'Git', icon: 'bx bxl-git' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="min-h-screen px-[9%] pt-24 pb-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-[var(--main-color)] mb-12 text-center animate-fadeIn">About Me</h1>
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-gray-900 p-8 rounded-2xl border-2 border-[var(--main-color)] transform hover:shadow-[0_0_15px_#7cf03d] transition-all duration-300 animate-fadeIn">
            <h2 className="text-3xl font-semibold text-white mb-4">Armelio Pashollari</h2>
            <p className="text-gray-300 text-base mb-4">
              I'm a passionate Junior Full-Stack Developer with a strong foundation in web development. I specialize in creating responsive and user-friendly applications using HTML, CSS, JavaScript. Currently, I'm honing my skills in the MERN stack (MongoDB, Express.js, React, Node.js) to build scalable and modern web solutions.
            </p>
            <p className="text-gray-300 text-base">
              With a knack for problem-solving and a commitment to learning, I thrive in collaborative environments and enjoy turning ideas into reality through code. When I'm not coding, you can find me exploring new tech trends or contributing to open-source projects on GitHub.
            </p>
          </div>
          <div className="flex-1 bg-gray-900 p-8 rounded-2xl border-2 border-[var(--main-color)] transform hover:shadow-[0_0_15px_#7cf03d] transition-all duration-300 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-semibold text-white mb-6">My Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <i className={`bx ${skill.icon} text-2xl text-[var(--main-color)]`}></i>
                  <span className="text-white text-base">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex space-x-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>


          <div className="mt-8 flex space-x-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <IconContainer link='https://www.facebook.com/profile.php?id=100078417577734' children={<FaFacebookF />} />
            <IconContainer link='https://www.linkedin.com/in/regi-mele-74ba54138/' children={<FaLinkedinIn />} />
            <IconContainer link='https://github.com/RegiMele' children={<FaGithub />} />
          </div>
        </div>
      </section >
    </div >
  );
}

export default About