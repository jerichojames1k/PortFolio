import AboutImage from "../../images/Jericho_Hipe.jpg";
const About = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-wrap justify-center">
        <div className="p-10 border-2 border-red-400 w-[calc(100vw-500px)]">
          <div className="float-right aspect-3/2  object-contain w-[300px] border-2">
            <img className="w-[100%] h-fit" src={AboutImage} alt="Jericho" />
          </div>
          <p className="whitespace-pre-wrap text-[1.5rem]">
            <span className="text-bold text-[2rem]">
              Hi, I’m Jericho James Villahermosa
            </span>{" "}
            , a software engineer who loves exploring new technologies and is
            always eager to learn. I continuously challenge myself to seek new
            knowledge and opportunities that help me grow professionally.
            Moreover, I enjoy spending my weekends in nature, embracing a
            healthy and balanced lifestyle.
          </p>
        </div>
        <div className="w-[calc(100vw-500px)] p-10 overflow-hidden">
          <div className="flex flex-wrap width=[calc(100vw-500px)]">
            <div className="float-right aspect-3/2  object-contain w-[300px] border-2 p-4">
              <img className="w-[100%] h-fit" src={AboutImage} alt="Jericho" />
            </div>
            <div className="float-right aspect-3/2  object-contain w-[300px] border-2  p-4">
              <img className="w-[100%] h-fit" src={AboutImage} alt="Jericho" />
            </div>
            <div className="float-right aspect-3/2  object-contain w-[300px] border-2  p-4">
              <img className="w-[100%] h-fit" src={AboutImage} alt="Jericho" />
            </div>
            <div className="float-right aspect-3/2  object-contain w-[300px] border-2  p-4">
              <img className="w-[100%] h-fit" src={AboutImage} alt="Jericho" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
