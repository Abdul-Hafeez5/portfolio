// import AboutImg from "../assets/AoutImg.jpeg";
import AboutImg1 from "../assets/About1.jpeg";
import dotsImg from "../assets/dots.png";

const About = () => {
  return (
    <div id="about" className="px-10 dark:bg-slate-900">
      <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
        <div className="relative">
          <img
            className=" h-1/4 absolute top-0 left-0 -z-10"
            src={dotsImg}
            alt="dottemImage"
          />
          <div className="h-full rounded-full overflow-hidden">
            <img src={AboutImg1} alt="portrait_photo" />
          </div>
        </div>
        <div className="my-auto flex flex-col gap-3">
          <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
          <h1 className="text-3xl font-medium dark:text-white">
            Better Design
          </h1>
          <h1 className="text-3xl font-medium dark:text-white">
            Better Experience
          </h1>
          <p className="text-gray-400">
            I design and build digital products. I'm also a multi-disciplinary
            maker with over 10 years of experiences in wide range of design
            disciplines.
          </p>
          <h2 className="text-gray-400 font-medium">HTML</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">CSS</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Tailwind</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Javascript</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">React</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-11/12 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Node JS</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Express JS</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Mongo db</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
