import AnimatedTitle from "./AnimatedTitle";

const About = () => {
  return (
    <div id="about" className="min-h-screen w-screen flex flex-col items-center justify-center">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          {/* Add any subtitle text here if needed */}
        </p>

        <AnimatedTitle
          title="Hierarchy of Our <b>Amazing</b> TTT Squad"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext text-center">
          <p className="text-gray-500">
            {/* Additional descriptive text can be added here */}
          </p>
        </div>
      </div>

      {/* ✅ Full-width image */}
      <div className="w-screen flex justify-center mt-10 mb-20">
        <img
          src="img/img.jpg"
          alt="Hierarchy Structure"
          className="w-screen h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default About;
