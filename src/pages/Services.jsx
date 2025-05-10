const services = [
  {
    icon: 'bx-code-alt',
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces using HTML, CSS, JavaScript, and frameworks like React for seamless user experiences.'
  },
  {
    icon: 'bx-server',
    title: 'Backend Development',
    description: 'Creating robust server-side applications with Python and Node.js, including API development and database management with MongoDB.'
  },
  {
    icon: 'bx-git-branch',
    title: 'Version Control & Collaboration',
    description: 'Utilizing Git and GitHub for efficient version control, code collaboration, and project management in development workflows.'
  },
  {
    icon: 'bx-mobile-alt',
    title: 'Responsive Web Design',
    description: 'Designing mobile-friendly websites that adapt to various devices, ensuring accessibility and optimal performance across platforms.'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="min-h-screen px-[9%] pt-24 pb-16 flex flex-col items-center">
            <h1 className="text-5xl font-bold text-[var(--main-color)] mb-12 text-center animate-fadeIn">My Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
              {
                services.map((service, index) => (
                  <div
                    key={index}
                    className="cursor-pointer bg-gray-900 p-8 rounded-2xl border-2 border-[var(--main-color)] text-center transform hover:scale-105 hover:shadow-[0_0_15px_#7cf03d] transition-all duration-300 animate-fadeIn"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <i className={`bx ${service.icon} text-4xl text-[var(--main-color)] mb-6`}></i>
                    <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 text-base">{service.description}</p>
                  </div>
                ))
              }
            </div>
      </section>
    </div>
  )
}

export default Services