import carreraDT from "../assets/carreraDT-project.png"
import fitclub from "../assets/fit-club-project.png"
import tecnoHogar from "../assets/tecnoHogar-project.png"
import kinesiologia from "../assets/kinesiologia.png"
import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
  {
    img: carreraDT,
    title: "Project #1",
    description: "Front-end application, made only with HTML, CSS and JavaScript.",
    links: {
      site: "https://lautaromuino03.github.io/proyecto-UTN/",
      github: "https://github.com/LautaroMuino03",
    },
  },
  {
    img: fitclub,
    title: "Project #2",
    description: "I developed a gym application purely using React.Js, making it fully responsive.",
    links: {
      site: "https://fit-club-one.vercel.app/",
      github: "https://github.com/LautaroMuino03",
    },
  },
  {
    img: tecnoHogar,
    title: "Project #3",
    description: "I developed a full-stack E-commerce application using React.Js and JavaScript for the front-end, and for the back-end, I used MongoDB, Express, bcrypt, and other dependencies.",
    links: {
      video: "https://www.youtube.com/watch?v=t595JRThhIU",
      github: "https://github.com/LautaroMuino03",
    },
  },
  {
    img: kinesiologia,
    title: "Project #4",
    description: "Front-page for a client: gastroenterology center, that allows patients to watch information about the center and the services they offer.",
    links: {
      site: "https://sagradocorazongastroenterologia.vercel.app/",
      github: "https://github.com/LautaroMuino03",
    },
  },
];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal key={index}>
            <div 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        {project.links.site && (
                          <a href={project.links.site}
                              className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                          transition duration-300'>
                              View Site
                          </a>
                        )}
                        {project.links.github && (
                          <a href={project.links.github}
                              className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                          transition duration-300'>
                              <AiOutlineGithub/>
                          </a>
                        )}
                        {project.links.video && (
                          <a href={project.links.video}
                              className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                          transition duration-300'>
                              Watch Video
                          </a>
                        )}
                    </div>
                </div>
            </div>
            </Reveal>
        ))}
    </div>
  )
}

export default Portfolio