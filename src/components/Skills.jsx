import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiMysql,
  DiGithub,
} from "react-icons/di";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "Next Js" },
      { name: "TypeScript", icon: <DiJavascript1 className="text-blue-500" /> },
      { name: "Sass", icon: <DiSass className="text-pink-600" /> },
      { name: "TailwindCSS", icon: <DiCss3 className="text-teal-500" /> },
      { name: "Material UI" },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node Js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "Express", icon: <DiNodejsSmall className="text-gray-500" /> },
      { name: "MySQL", icon: <DiMysql className="text-blue-600" /> },
      { name: "Firebase" },
      { name: "JWT" },
      { name: "REST API" },
    ],
  },
  {
    category: "Tools",
    technologies: [
      { name: "Postman", icon: <DiGithubBadge className="text-orange-600" /> },
      { name: "Git", icon: <DiGithubBadge className="text-red-600" /> },
      { name: "GitHub", icon: <DiGithub className="text-black" /> },
      { name: "VS Code" },
      { name: "Scrum" },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center items-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">My Skills and Tools</h2>

        <div className="space-y-8">
          {/* Primera fila: Frontend y Backend */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            {skills.slice(0, 2).map((skill, index) => (
              <div
                key={index}
                className="skill-card border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2"
              >
                <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                <div className="grid grid-cols-2 gap-4 justify-items-center">
                  {skill.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-2xl">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Segunda fila: Tools */}
          <div className="flex justify-center items-center">
            {skills.slice(2).map((skill, index) => (
              <div
                key={index}
                className="skill-card border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2"
              >
                <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                <div className="grid grid-cols-2 gap-4 justify-items-center">
                  {skill.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-2xl">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
