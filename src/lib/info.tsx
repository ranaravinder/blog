import me from '../app/avatar.jpg';

export const name = 'Rana Ravinder Singh';
export const avatar = me;
export const about = () => {
  return (
    <>
      Hey, I'm Rana. I'm the <b>Cloud Architect and full stack developer, </b> helps to develop cloud native micro frontend and microservices.
    </>
  );
};
export const bio = () => {
  return (
    <>
      <p className='mb-5'>I am a skilled software developer with expertise in a variety of technologies, including .NET, JS, React JS, Next JS, and Azure Cloud. I specialize in designing scalable solutions with microservices and event-driven architecture using technologies such as Solace, Kafka, Event Hub, and Service Bus.</p>
      <p className='mb-5'> With years of experience in the software development industry, I have honed my skills in writing clean, efficient, and reliable code. I am passionate about staying up-to-date with the latest technologies and trends, and I take pride in my ability to design innovative solutions that meet my clients' needs.</p>
      <p className='mb-5'>In addition to my technical skills, I am also a strong communicator and team player. I enjoy working collaboratively with others to solve complex problems and to deliver high-quality results.</p>
      <p className='mb-5'>I have completed my Azure certifications in “Azure solutions architect expert”, “Azure DevOps engineer expert”, “Azure developers associate” and "Azure administrator associate".</p>
      <div className="flex justify-center">

        <figure className="mb-4 inline-block max-w-sm">
          <a href="https://www.credly.com/badges/0ad14360-e912-4c62-8f4a-9c5b6ca18678/public_url">
            <img
              src="Expert-DevOps-Engineer.svg"
              className="mb-4 h-125 max-w-full rounded-lg align-middle leading-none shadow-lg"
              alt="Azure DevOps Engineer Expert" />
          </a>
          <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
            Azure DevOps Engineer Expert
          </figcaption>
        </figure>

        <figure className="mb-4 inline-block max-w-sm">
          <a href="https://www.credly.com/badges/ad1b4ee1-32ab-4719-9c8d-be87712394c5/public_url">
            <img
              src="305.svg"
              className="mb-4 h-125 max-w-full rounded-lg align-middle leading-none shadow-lg"
              alt="Azure Solutions Architect Expert" />
          </a>
          <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
            Azure Solutions Architect Expert
          </figcaption>
        </figure>
        <figure className="mb-4 inline-block max-w-sm">
          <a href="https://www.credly.com/badges/5204f0a1-9ff1-4068-a55a-642c212ec802/public_url">
            <img
              src="204.svg"
              className="mb-4 h-125 max-w-full rounded-lg align-middle leading-none shadow-lg"
              alt="Azure Developer Associate" />
          </a>
          <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
            Azure Developer Associate
          </figcaption>
        </figure>
        <figure className="mb-4 inline-block max-w-sm">
          <a href="https://www.credly.com/badges/ed897709-8527-4764-9f36-7af5c792df80/public_url">
            <img
              src="104.svg"
              className="mb-4 h-125 max-w-full rounded-lg align-middle leading-none shadow-lg"
              alt="Azure Administrator Associate" />
          </a>
          <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
            Azure Administrator Associate
          </figcaption>
        </figure>

      </div>
      <p className='mb-5'>Whether you are looking for a developer to build a new project from scratch or to optimize an existing system, I am confident that I can deliver the results you need. Please feel free to reach out to me to learn more about my skills and experience, or to discuss your next project.</p> 
    </>
  );
};
export const blogTitle = () => {
  return (
    <>
      CodeCraft - Crafting Solutions with .NET, JS, ReactJS, NextJS, Azure, Microservices, and Event-Driven Architecture
    </>
  );
};
export const blogTagline = () => {
  return (
    <>
      Innovative solutions, expertly crafted by a skilled developer
    </>
  );
};


