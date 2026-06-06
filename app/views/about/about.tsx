import AboutImage from "../../images/Jericho_Hipe.jpg";
const About = () => {
  return (
      <div id="about" className="flex flex-wrap justify-center">
        <div id="info" className="p-10 w-[calc(100vw-500px)]">
          <div  className="float-right aspect-3/2 w-[350px]">
            <img className="w-[100%]" src={AboutImage} alt="Jericho" />
          </div>
          <p className="whitespace-pre-wrap text-[1.7rem] p-2">
            <span className="text-bold text-[3rem]">
              Hi, I’m Jericho James Villahermosa
            </span>{" "}
            , a software engineer who loves exploring new technologies and is
            always eager to learn. I continuously challenge myself to seek new
            knowledge and opportunities that help me grow professionally.
            Moreover, I enjoy spending my weekends in nature, embracing a
            healthy and balanced lifestyle.
          </p>
        </div>
    
       <div id="nature" className="grid grid-cols-3 gap-2 pb-10">
            <div className="aspect-3/2  w-[350px] p-2 ">
              <img className="w-[100%] h-fit" src={AboutImage} alt="Jericho" />
            </div>
            <div className="aspect-3/2  w-[350px]  p-2">
              <img className="w-[100%] h-fit" src={AboutImage} alt="Jericho" />
            </div>
            <div className="aspect-3/2  w-[350px]  p-2">
              <img className="w-[100%] h-fit" src={AboutImage} alt="Jericho" />
            </div>
            <div className="aspect-3/2  w-[350px]  p-2">
              <img className="w-[100%] h-fit" src={AboutImage} alt="Jericho" />
            </div>
             <div className="aspect-3/2  w-[350px]  p-2">
              <img className="w-[100%] h-fit" src={AboutImage} alt="Jericho" />
            </div>   
       </div>

       </div>
  );
};
export default About;
