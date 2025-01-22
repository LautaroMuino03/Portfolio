import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div>
          <div className="text-gray-300 my-3">
            <h3 className="text-4xl font-semibold mb-5">
              About <span>Me</span>
            </h3>
            <p className="text-justify leading-7 w-11/12 mx-auto">
              I am 21 years old, programming technology student and a web
              developer. I am motivated by difficulty, I work very well in a
              team, I have good organization and I have a strong commitment to
              improving and learning new technologies.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
